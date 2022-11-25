import React, {Component} from 'react';
import {
    getLatestNews,
    getSearchNews,
    getTechnologyNews,
    getLifeStyleNews,
    getHealthNews
} from "../store/actions/news-actions";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import NewsCard from "../components/NewsCard";
import Banner from "../components/Banner";
import ShortCard from "../components/ShortCard";
import ShortCardList from "../components/ShortCardList";
import SectionTitle from "../components/SectionTitle";

class Home extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            latestNews: null,
            healthNews: null,
            lifeStyleNews: null,
            technologyNews: null
        }
    }

    componentDidMount() {
        this.props.getLatestNews();
        this.props.getTechnologyNews({category: 'technology'});
        this.props.getHealthNews({category: 'health'});
        this.props.getLifeStyleNews({category: 'lifestyle'});
    }

    renderNewsCard() {
        if(this.props.latestNews !== null){
            let content = [];
            // eslint-disable-next-line array-callback-return
            this.props.latestNews.news.map(n => {
                if(content.length < 8){
                    content.push(<div className="col-lg-3 mb-4" key={n.id}>
                        <NewsCard news={n}/>
                    </div>);
                }
            });
            return content;
        }else{
            return <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        }
    }

    renderTechnologyNews() {
        if(this.props.technologyNews !== null){
            return <>
                <SectionTitle titleName={'Technology News'}/>
                <ShortCard titleNews={this.props.technologyNews.news[0]}/>

                <div className="utf_list_post_block">
                    <ul className="utf_list_post">
                        {
                            this.props.technologyNews.news.slice(1, 4).map((data) => {
                                return <ShortCardList key={data.id} news={data}/>
                            })
                        }
                    </ul>
                </div>
            </>
        }else{
            return <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        }
    }

    renderLifeStyleNews() {
        if(this.props.lifeStyleNews !== null){
            return <>
                <SectionTitle titleName={'Lifestyle News'}/>
                <ShortCard titleNews={this.props.lifeStyleNews.news[0]}/>

                <div className="utf_list_post_block">
                    <ul className="utf_list_post">
                        {
                            this.props.lifeStyleNews.news.slice(1, 4).map((data) => {
                                return <ShortCardList key={data.id} news={data}/>
                            })
                        }
                    </ul>
                </div>
            </>
        }else{
            return <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        }
    }

    renderHealthNews() {
        if(this.props.healthNews !== null){
            return <>
                <SectionTitle titleName={'Health News'}/>
                <ShortCard titleNews={this.props.healthNews.news[0]}/>

                <div className="utf_list_post_block">
                    <ul className="utf_list_post">
                        {
                            this.props.healthNews.news.slice(1, 4).map((data) => {
                                return <ShortCardList key={data.id} news={data}/>
                            })
                        }
                    </ul>
                </div>
            </>
        }else{
            return <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        }
    }

    render() {
        return (
            <div className="container margin_fixed_height_reduce">
                {
                    this.props.latestNews !== null ? <Banner latestNews={this.props.latestNews.news}/> : <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }


                <div className="row mt-5">
                    <div className="col-lg-12">
                        <SectionTitle titleName={'Latest News'}/>
                    </div>
                    {
                        this.renderNewsCard()
                    }
                </div>

                <div className="row my-5">
                    <div className="col-lg-4">
                        <div className="block color-dark-blue">
                            {this.renderTechnologyNews()}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="block color-dark-blue">
                            {this.renderLifeStyleNews()}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="block color-dark-blue">
                            {this.renderHealthNews()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    getLatestNews: PropTypes.func.isRequired,
    getSearchNews: PropTypes.func.isRequired,
    getTechnologyNews: PropTypes.func.isRequired,
    getLifeStyleNews: PropTypes.func.isRequired,
    getHealthNews: PropTypes.func.isRequired,
    latestNews: PropTypes.object,
    healthNews: PropTypes.object,
    lifeStyleNews: PropTypes.object,
    technologyNews: PropTypes.object,
    searchedNews: PropTypes.object,
    errors: PropTypes.object
};

const mapStateToProps = state => {
    return {
        latestNews: state.news.latestNews,
        searchedNews: state.news.searchedNews,
        healthNews: state.news.healthNews,
        lifeStyleNews: state.news.lifeStyleNews,
        technologyNews: state.news.technologyNews,
        errors: state.news.errors
    };
};

export default connect(mapStateToProps, {
    getLatestNews,
    getSearchNews,
    getTechnologyNews,
    getLifeStyleNews,
    getHealthNews
})(Home);