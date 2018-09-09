import React, {Component} from 'react';
import {
    Route, NavLink, HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
//import Todo from "./Todo";

import Contact from "./Contact";
import Emoji from "./Emoji";

import AnimateHeight from 'react-animate-height';



import RenderJSON from "./stuff/renderjson/Renderjson";
import TaiwanNews from "./stuff/taiwannews/TaiwanNews";



class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0,
        };
    }

    toggle = () => {
        const {height} = this.state;

        this.setState({
            height: height === 0 ? 'auto' : 0,
        });
    };

    render() {
        const {height} = this.state;
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
                                <button className="react__anchor" onClick={this.toggle}>
                                    Skills
                                </button>
                                <AnimateHeight
                                    duration={500}
                                    height={height} // see props documentation bellow
                                >

                                    <ul className="react__submenu">
                                        <li>
                                            <NavLink className="react__subanchor" to="/renderjson">Render JSON</NavLink>
                                            <NavLink className="react__subanchor" to="/taiwannews">Taiwan News AJAX</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>
                            <li>
                                <NavLink className="react__anchor" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="react__content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/stuff" component={Stuff}/>
                            <Route path="/renderjson" component={RenderJSON}/>
                            <Route path="/taiwannews" component={TaiwanNews}/>
                            <Route path="/contact" component={Contact}/>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }

}

export default Main;