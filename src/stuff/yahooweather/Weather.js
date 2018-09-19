import React from "react";
import "./../../css/stuff/weathercard.scss";
import StormIcon from "./../../img/weather/storm.png";
import SunnyIcon from "./../../img/weather/sunny.png";


function weatherImg(howCode) {

    let icon;
    switch (howCode) {
        case "47":
            icon = StormIcon;
            break;
        case "4":
            icon = StormIcon;
            break;
        case "34":
            icon = SunnyIcon;
            break;
        default:
            icon = SunnyIcon;

    }

    return icon;
}

//https://reactjs.org/docs/faq-ajax.html
class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.getDayNum = this.getDayNum.bind(this);

    }

    getDayNum(daynum) {
        let a = daynum.indexOf(" ");
        let tara = daynum.substring(0, a + 1);
        return tara;
    }

    render() {
        const {query} = this.props.how;
        let rawTit = query.results.channel.title;

        let n = rawTit.indexOf(",");
        let tar = rawTit.substring(n + 1);
        let locationTit = tar;


        return (

            <div>

                <h3 className="weather__location">{locationTit}</h3>
                {/*<h3>{query.title}</h3>*/}
                {/*<h3>{query.created}</h3>*/}
                {/*<h4>{query.results.channel.item.title}</h4>*/}

                <ul className="weather__daylist cf">
                    {query.results.channel.item.forecast.slice(0, 7).map((forYou, index) =>
                        <li key={index.toString()}>
                            <div className="cf">
                                <p>{forYou.day}</p>
                                <p className="weather__day">{this.getDayNum(forYou.date)} </p>

                            </div>
                            <img className="weathericon" src={weatherImg(forYou.code)} alt=""/>
                            <div>
                                <span className="weather__high">{forYou.high}°</span>
                                <span className="weather__low">{forYou.low}°</span>
                            </div>

                        </li>)}
                </ul>
            </div>
        );
    }
}

class WeatherCard extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            location: 2306179,
            weather: [],
            value: 'Taipei'
        };

        this.setLocation = this.setLocation.bind(this);
        this.getLocationInfo = this.getLocationInfo.bind(this);
    }

    setLocation(event) {
        this.setState({location: event.target.value}, this.getLocationInfo);


    }

    getLocationInfo() {
        let query = encodeURI("select * from weather.forecast where woeid ='" + this.state.location + "' and u='c'");
        let url = "https://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json";

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        weather: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        this.getLocationInfo();

    }

    render() {
        const {error, isLoaded} = this.state;
        //驚!上面這行一定要在!

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="weather">
                    <select className="weather__select" value={this.state.location} onChange={this.setLocation}>
                        <option value="2306179">Taipei</option>
                        <option value="2151330">Beijing</option>
                        <option value="1180689">Manila</option>
                        <option value="1118370">Tokyo</option>
                    </select>
                    <Weather how={this.state.weather}></Weather>
                </div>

            );
        }
    }
}


export default WeatherCard;