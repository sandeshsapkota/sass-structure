import {Component} from "react"

class Input extends Component {

    constructor(props) {
        super(props);
        this.name = props.name;
        this.type = props.type;
        this.placeholder = props.placeholder;
        this.class = props.class;
    }

    render() {
        return (
            <input className={`form-control ${this.class ? this.class : ''}`} placeholder={this.placeholder}
                   name={this.name}
                   type={this.type}/>
        );
    }
}

export default Input;
