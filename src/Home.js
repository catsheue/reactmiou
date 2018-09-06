import React, {Component} from 'react';
import Emoji from "./Emoji";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>HELLO</h2>
                <p>Luna is cute <Emoji symbol="😄"/></p>
            </div>
        )
    }
}

export default Home;