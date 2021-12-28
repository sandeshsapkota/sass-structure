const button = (props) => {
    return (
        <button onClick={props.onClick}
                className={'px-3 py-2 text-sm bg-blue-600 hover:opacity-90 transition-3s text-white font-bold rounded ' + props.classes}>
            {props.children}
        </button>
    )
}

export default button