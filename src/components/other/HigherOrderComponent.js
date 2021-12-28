// 1.  component
// 2. second parameter to increment value


import {useState} from "react";

const HigherOrderComponent = (PropComponent, incrementValue) => {
    const HocFun = () => {
        const [value, setValue] = useState(0)
        const incrementHandler = () => {
            setValue(value + incrementValue)
        }

        return <PropComponent value={value} incrementHandler={incrementHandler} />
    }

    return HocFun;
}

export default HigherOrderComponent