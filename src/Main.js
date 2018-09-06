import React, { Component } from 'react';
import {
    Route, NavLink, HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Emoji from "./Emoji";

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
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/stuff">Stuff</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="react__content">
                            <Route exact path="/" component={Home} />
                            <Route path="/stuff" component={Stuff}/>
                            <Route path="/contact" component={Contact}/>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }

}

export default Main;