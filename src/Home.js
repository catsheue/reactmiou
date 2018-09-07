import React, {Component} from 'react';
import Emoji from "./Emoji";
import ReactLogo from "./img/logo.png";

class Home extends Component {
    render() {
        return (
            <div className="react__home">
                <h2>HELLO</h2>
                <img className="react__logo" src={ReactLogo} alt=""/>
                <p>This is a site all about react examples. <Emoji symbol="😄"/></p>
            </div>
        )
    }
}

export default Home;