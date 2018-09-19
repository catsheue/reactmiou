import React from "react";
import "./../../css/stuff/newsapi.scss";
import errImg from "./../../img/luna.png";

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

    addDefaultSrc(ev){
        ev.target.src = errImg;
    }

    render() {
        return <div>
            <ul className="newsapi__ul">
                {this.props.news.map((newsItem) =>
                    <li className="news-item">
                        <a target="_blank" href={newsItem.url}>
                            <div className="cf">
                                <div className="newsapi__pic">
                                    <div className="newsapi__thumbnail">
                                        <img alt="news" src={newsItem.urlToImage ? newsItem.urlToImage : errImg} />
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
    url = 'https://newsapi.org/v2/top-headlines?country=tw&apiKey=d0333c98698e4f6b818186a29bf10625';

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            news: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        var self = this;
        //console.log('this.url=', this.url);

        fetch(this.url)
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

        // fetch(this.url)
        //     .then(function (response) {
        //         return response.json()
        //     }).then(function (json) {
        //     //console.log('parsed json', json)
        //     if (json.status === 'ok') {
        //         self.setState({
        //             news: json.articles,
        //             isLoaded: true
        //         });
        //     } else {
        //         alert(json.status);
        //     }
        // }).catch(function (ex) {
        //     console.log('parsing failed', ex)
        // })
    }

    render() {
        const {error, isLoaded} = this.state;
        //驚!上面這行一定要在!
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return <News news={this.state.news}/>;
        }


    }
}

class TaiwanNews extends React.Component {
    render() {
        return <div className="newsapi">
            <h1>Taiwan Headline News</h1>
            <NewsContainer/>
        </div>;
    }
}


export default TaiwanNews;