import HigherOrderComponent from "./HigherOrderComponent";
import Button from "../button/Button";

const FirstComponent = ({ value, incrementHandler }) => {
    return (<div className={'wrapper grid gap-1 justify-center text-center p-8'}>
        {value}
        <button
            onClick={() => incrementHandler()}>
            +
        </button>
    </div>)
}

export default HigherOrderComponent(FirstComponent, 50);