import React, { Component } from 'react';
import {
    Route, NavLink, HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Todo from "./Todo";
import Contact from "./Contact";
import Emoji from "./Emoji";


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class Main extends Component{
    render(){
        return (
            <HashRouter>
                <div className="react">
                    <h1 className="react__title">
                        <Emoji symbol="🐑"/>
                        <Emoji symbol="🎃"/>
                         React Rocks
                        <Emoji symbol="😺"/>
                        <Emoji symbol="🐑"/>
                    </h1>
                    <div className="cf">
                        <ul className="react__nav">
                            <li>
                                <NavLink className="react__anchor" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="react__anchor" to="/stuff">Stuff</NavLink>
                                <ul className="react__submenu">
                                    <li>
                                        <NavLink className="react__subanchor" to="/todo">Todo App</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink className="react__anchor" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="react__content">
                            <Route exact path="/" component={Home} />
                            <Route path="/stuff" component={Stuff}/>
                            <Route path="/todo" component={Todo}/>
                            <Route path="/contact" component={Contact}/>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }

}

export default Main;