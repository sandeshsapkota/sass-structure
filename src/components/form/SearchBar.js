import {useState, useRef, useEffect} from "react";
import Icon from "../general/Icon";

function SearchBar(props) {
    // states
    const wrapper = useRef(null)
    const searchBarRef = useRef(null)

    const [state, setState] = useState({
        data: props.data,
        highLightingIndex: 0,
        searchText: '',
        filteredResults: [],
        showResults: false,
    })

    console.log(props.children)

    // if props not coming
    // to which value to search from when looping
    if (!props.trackBy) props.trackBy = 'value';


    const HideResults = () => {
        if (state.showResults) {
            setState(prevState => {
                return {...prevState, showResults: false}
            })
        }
    }

    const HandleSelect = () => {
        const item = state.filteredResults[state.highLightingIndex]

        if (item) {
            setState({...state, searchText: item[props.trackBy], showResults: false})
        }
    }

    const HandleSearch = e => {
        const searchQuery = e.target.value

        if (props.async) {
            setState(prevState => {
                    return {
                        ...prevState,
                        searchText: searchQuery,
                    }
                }
            )
            props.async(searchQuery)
            return
        }

        const showSearchResults = !!searchQuery
        let newFilterItems = []


        if (props.data.length)
            props.data.forEach(item => {
                if (item[props.trackBy])
                    if (item && item[props.trackBy].includes(searchQuery.toLowerCase())) {
                        newFilterItems.push(item)
                    }
            })


        setState(prevState => {
                return {
                    ...prevState,
                    searchText: searchQuery,
                    showResults: showSearchResults,
                    filteredResults: [...newFilterItems],
                }
            }
        )
    }

    const HandleMouseMove = e => {
        const suggestionItems = [...wrapper.current.children];
        const hoveringElm = e.target
        const index = suggestionItems.indexOf(hoveringElm)

        if (index >= 0) {
            setState(prevState => {
                return {
                    ...prevState, highLightingIndex: index
                }
            })
        }
    }

    const HandleKeyDownUp = e => {
        // 1. submit form when pressing Enter key
        // 2. handling arrow up down highlighting index

        const key = e.key
        let currentIndex
        if (state.searchText) {
            if (key === "Enter" || key === "ArrowUp" || key === "ArrowDown") {

                if (e.key === "Enter") {
                    if (state.searchText) {
                        HandleSelect()
                    }
                }

                if (e.key === "ArrowUp") {
                    currentIndex = state.highLightingIndex - 1;
                    currentIndex = state.highLightingIndex <= 0 ? state.highLightingIndex = state.filteredResults.length - 1 : currentIndex
                    HandleScroll()

                }


                if (e.key === "ArrowDown") {
                    currentIndex = state.highLightingIndex + 1;
                    currentIndex = currentIndex >= state.filteredResults.length ? state.highLightingIndex = 0 : currentIndex
                    HandleScroll()

                }

                setState((prevState) => {
                    return {...prevState, highLightingIndex: currentIndex}
                })

            }
        }
    }

    const HandleScroll = () => {
        if (state.filteredResults.length) {
            let scrollElm = wrapper.current.children[state.highLightingIndex]
            wrapper.current.scrollTo(0, scrollElm.offsetTop - 40);
        }
    }

    const useOutsideAlerter = (ref, fn) => {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    fn()
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref, fn]);
    }

    useOutsideAlerter(searchBarRef, HideResults)

    return (
        <div className={`search ${props.class}`} ref={searchBarRef}>
            <div className={'search__input-wrap shadow'}>
                <input
                    onChange={HandleSearch}
                    onSubmit={HandleSelect}
                    onKeyUp={HandleKeyDownUp}
                    placeholder={props.placeholder ? props.placeholder : 'Search'}
                    className={`search__input ${props.inputClass}`}
                    type="text"
                    value={state.searchText ? state.searchText : ''}/>
                <button className={'search__btn'}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="icon-search" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M14.026 12.848l3.569 3.568-1.18 1.18-3.567-3.57a7.466 7.466 0 0 1-4.681 1.64c-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.467 7.467 0 0 1-1.641 4.682zm-1.672-.619A5.814 5.814 0 0 0 14 8.167a5.832 5.832 0 0 0-5.833-5.834 5.831 5.831 0 0 0-5.834 5.834A5.832 5.832 0 0 0 8.167 14a5.814 5.814 0 0 0 4.062-1.646l.125-.125z"
                            fill="currentColor"/>
                    </svg>
                </button>
            </div>
            {state.showResults &&
                <div className="search__result shadow">
                    <h4 className={'search__result-text'}> Search
                        Results <span> ({state.filteredResults.length ? state.filteredResults.length : 0}) < /span>
                    </h4>
                    {state.filteredResults && state.filteredResults.length ?
                        <ul className={'search__list'} ref={wrapper} onMouseMove={HandleMouseMove}>
                            {state.filteredResults.map((item, index) =>
                                <li onClick={() => HandleSelect(item)}
                                    className={state.highLightingIndex === index ? 'search__item is-active' : 'search__item'}
                                    key={index}>{item[props.trackBy]}</li>
                            )}
                        </ul>
                        :
                        <p className={'search__empty-results'}>No results found.</p>}
                </div>}
        </div>
    )
}

export default SearchBar;