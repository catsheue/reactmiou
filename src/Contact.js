import React, {Component} from 'react';
import LunaCircle from "./img/luna.png";


class Contact extends Component {
    render() {
        return (
            <div className="react__contact">
                <h2 className="react__contactit">Contact</h2>
                <img src={LunaCircle} alt=""/>
                <p className="react__contactName">Luna Goodnight</p>
                <p>Hire Me Please :</p>
                <p>catsheue@gmail.com</p>
            </div>
        //    ↓不加分號沒關係吧???
        )
    }
}
export default Contact;