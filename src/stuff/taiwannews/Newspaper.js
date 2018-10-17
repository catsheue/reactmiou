import React from "react";
import "./../../css/stuff/newsapi.scss";
import "./Newspaper.scss";
import errImg from "./../../img/news/noimage.png";

class Attribution extends React.Component {
    render() {
        return (
            <div>
                <small><em>Powered by NewsApi.org</em></small>
            </div>
        )
    }
}

class News extends React.Component {

    addDefaultSrc(ev) {
        ev.target.src = errImg;
    }

    render() {
        return <div>

            <ul className="newsapi__ul">
                {this.props.news.map((newsItem,index) =>
                    <li className="news-item" key={index.toString()}>
                        <a target="_blank" href={newsItem.url}>
                            <div className="cf">
                                <div className="newsapi__pic">
                                    <div className="newsapi__thumbnail">
                                        <img alt="news" src={newsItem.urlToImage ? newsItem.urlToImage : errImg}/>
                                    </div>
                                </div>
                                <div className="newsapi__con">
                                    <h4>{newsItem.title}</h4>
                                    {newsItem.description}</div>
                            </div>
                        </a>
                    </li>)}
            </ul>
            <Attribution></Attribution>
        </div>;
    }
}

class NewsContainer extends React.Component {


    key = 'd0333c98698e4f6b818186a29bf10625';


    constructor(props) {
        super(props);

        this.state = {
            error: null,
            news: [],
            isLoaded: false,
            type: "Taiwan",
            url: 'https://newsapi.org/v2/top-headlines?country=tw&apiKey=' + this.key
        }
    }

    newstype = (e) => {
        this.setState({
            type: e.target.value
        }, this.typeswitch);
        // console.log(e.target.value);
        // console.log(this.state.url);
        //
        // console.log(this.state.type);
    }
    typeswitch = () => {
        switch (this.state.type) {
            case "Taiwan":
                this.setState(
                    (state) => ({
                        url: "https://newsapi.org/v2/top-headlines?country=tw&apiKey="  + this.key
                    }),this.fetchnews);
                break;
            case "CNN":
                this.setState(
                    (state) => ({
                        url: "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey="  + this.key
                    }),this.fetchnews);
                //this.setState({url: ""});
                break;
            case "Buzzfeed":
                this.setState(
                    (state) => ({
                        url: "https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=" + this.key
                    }),this.fetchnews);
                //    this.setState({url: ""});
                break;
            default:
                this.setState({url: "https://newsapi.org/v2/top-headlines?country=tw&apiKey="   + this.key},this.fetchnews);
        }


    }

    fetchnews(){

        fetch(this.state.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        news: result.articles
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
        this.fetchnews();
        //console.log('this.url=', this.url);

    }

    render() {
        const {error, isLoaded} = this.state;
        //驚!上面這行一定要在!
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
            <div>
            <div className="nav">
                <button onClick={this.newstype} value="Taiwan">Taiwan</button>
                <button onClick={this.newstype} value="CNN">CNN</button>
                <button onClick={this.newstype} value="Buzzfeed">Buzz</button>
            </div>
            <News news={this.state.news}/>
            </div>
        );
        }


    }
}

class Newspaper extends React.Component {

    url = "";

    constructor(props) {
        super(props);
        this.state = {
            type: "Taiwan",
            url: "https://newsapi.org/v2/top-headlines?country=tw&apiKey=d0333c98698e4f6b818186a29bf10625"
        }
    }



    render() {
        return <div className="newsapi">
            <h1>Luna Times</h1>
            <p>Choose you channel:</p>

            <NewsContainer />
        </div>;
    }
}


export default Newspaper;