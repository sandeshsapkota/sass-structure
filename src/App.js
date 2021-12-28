import "./sass/app.scss"
import FirstComponent from "./components/other/FirstComponent";
import {useState} from "react";
import SecondComponent from "./components/other/SecondComponent";
import ThirdComponent from "./components/other/ThirdComponent";

function App() {
    const [value, setValue] = useState(0)

    return (
        <main className="testimonial-grid">
            <header>
                <button>Hello</button>
            </header>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut consequuntur deleniti deserunt dicta doloremque dolorum est exercitationem expedita incidunt magni modi, nemo numquam omnis provident quasi quisquam sit tempora.
            </div>
            <footer>
                <button>Bye</button>
            </footer>
        </main>
    )
}


export default App;
