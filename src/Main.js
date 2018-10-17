import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
//import Todo from "./Todo";

import Contact from "./Contact";
import Emoji from "./Emoji";

import AnimateHeight from "react-animate-height";

import Newspaper from "./stuff/taiwannews/Newspaper";
import RenderJSON from "./stuff/renderjson/Renderjson";

import WeatherCard from "./stuff/yahooweather/Weather";
import "./css/hamburger.scss";

/* MenuItem.jsx*/
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: this.props.delay
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: "2rem",
        padding: "1rem 0",
        margin: "0 5%",
        cursor: "pointer",
        color: this.state.hover ? "gray" : "#fafafa",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: this.props.delay
      },
      line: {
        width: "90%",
        height: "1px",
        background: "gray",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: this.props.delay
      }
    };

    return (
      <div style={styles.container}>
        <NavLink className="" to={this.props.url}>
          <div
            style={styles.menuItem}
            onMouseEnter={() => {
              this.handleHover();
            }}
            onMouseLeave={() => {
              this.handleHover();
            }}
            onClick={this.props.onClick}
          >
            {this.props.children}
          </div>
        </NavLink>
        <div style={styles.line} />
      </div>
    );
  }
}

/* Menu.jsx */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        height: this.state.open ? "100%" : 0,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "black",
        opacity: 0.95,
        color: "#fafafa",
        transition: "height 0.3s ease",
        zIndex: 2
      },
      menuList: {
        paddingTop: "5rem"
      }
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : "black"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        height: "32px",
        width: "32px",
        // display:'flex',
        position: "absolute",
        zIndex: "3",
        cursor: "pointer",
        padding: "4px",
        top: "12px",
        left: "12px"
      },
      line: {
        height: "2px",
        width: "20px",
        background: this.state.color,
        transition: "all 0.2s ease"
      },
      lineTop: {
        transform: this.state.open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px"
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? "translateX(-16px)" : "none"
      },
      lineBottom: {
        transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: "5px"
      }
    };
    return (
      <div
        className="hamburgerbtn"
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      menuOpen: false
    };
  }

  toggle = () => {
    const { height } = this.state;

    this.setState({
      height: height === 0 ? "auto" : 0
    });
  };

  test() {
    console.log(this);
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { height } = this.state;

    const menu = [
      {
        name: "Home",
        url: "/"
      },
      {
        name: "Render JSON",
        url: "/renderjson"
      },
      {
        name: "Newspaper",
        url: "/taiwannews"
      },
      {
        name: "Weather",
        url: "/yahooweather"
      },
      {
        name: "Contact Me",
        url: "/contact"
      }
    ];

    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          url={val.url}
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick();
          }}
        >
          {val.name}
        </MenuItem>
      );
    });

    return (
      <HashRouter>
        <div className="react">
          <MenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="white"
          />
          <Menu open={this.state.menuOpen}>{menuItems}</Menu>

          <NavLink to="/">
            <h1 className="react__title">
              <Emoji symbol="🐑" />
              <Emoji symbol="🎃" />
              React Rocks
              <Emoji symbol="😺" />
              <Emoji symbol="🐑" />
            </h1>
          </NavLink>

          <div className="cf">
            <ul className="react__nav">
              <li>
                <NavLink className="react__anchor" to="/">
                  Home
                </NavLink>
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
                      <NavLink className="react__subanchor" to="/renderjson">
                        Render JSON
                      </NavLink>
                      <NavLink className="react__subanchor" to="/taiwannews">
                        Newspaper
                      </NavLink>
                      <NavLink className="react__subanchor" to="/yahooweather">
                        Weather
                      </NavLink>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>
              <li>
                <NavLink className="react__anchor" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="react__content">
              <Route exact path="/" component={Home} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/renderjson" component={RenderJSON} />

              <Route path="/taiwannews" component={Newspaper} />
              <Route path="/yahooweather" component={WeatherCard} />
              <Route path="/contact" component={Contact} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
