import {useState} from "react";
import Button from "../button/Button";

function ClickCounter(props) {

    return (
        <div className={'grid gap-1 justify-center text-center'}>
            <Button
                classes={`w-24 font-bold !text-xl !py-1.5`}
                onClick={() => props.handleCounter()}>
                +
            </Button>
        </div>
    )
}

export default ClickCounter