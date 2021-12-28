import HigherOrderComponent from "./HigherOrderComponent";
import Button from "../button/Button";

const FirstComponent = ({ value, incrementHandler }) => {
    return (<div className={'grid gap-1 justify-center text-center wrapper'}>
        {value}
        <Button
             classes={`w-24 font-bold !text-xl !py-1.5`}
            onClick={() => incrementHandler()}>
            +
        </Button>
    </div>)
}

export default HigherOrderComponent(FirstComponent, 4);