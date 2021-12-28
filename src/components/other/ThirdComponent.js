import HigherOrderComponent from "./HigherOrderComponent";
import {useState} from "react";

function ThirdComponent({value, setValue}) {
    let handleCount = () => {
        setValue(value + 100)
    }
    return (<HigherOrderComponent handleCounter={handleCount}/>)
}


export default ThirdComponent