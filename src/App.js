import "./sass/app.scss"
import FirstComponent from "./components/other/FirstComponent";
import {useState} from "react";
import SecondComponent from "./components/other/SecondComponent";
import ThirdComponent from "./components/other/ThirdComponent";

function App() {
    const [value, setValue] = useState(0)
    return (
        <div>
            <div className="support-scrollsnap"></div>
            <div className="scroll-container">
                <div className="scroll-area">1</div>
                <div className="scroll-area">2</div>
                <div className="scroll-area">3</div>
                <div className="scroll-area">4</div>
            </div>
        </div>
    )
}


export default App;
