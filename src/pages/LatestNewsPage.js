import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsCard from "../components/NewsCard";
import {connect} from "react-redux";
import {getLatestNews} from "../store/actions/news-actions";
import SectionTitle from "../components/SectionTitle";

class LatestNewsPage extends Component {

    componentDidMount() {
        this.props.getLatestNews();
    }

    renderNewsCard() {
        if(this.props.latestNews !== null){
            // eslint-disable-next-line array-callback-return
            return this.props.latestNews.news.map(n => <div className="col-lg-3 mb-4" key={n.id}>
                    <NewsCard news={n}/>
                </div>);
        }else{
            return <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        }
    }

    render() {
        return (
            <div className="container margin_fixed_height_reduce">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle titleName={'Latest News'}/>
                    </div>
                </div>
                <div className="row">
                    {this.renderNewsCard()}
                </div>
            </div>
        );
    }
}

LatestNewsPage.propTypes = {
    getLatestNews: PropTypes.func.isRequired,
    latestNews: PropTypes.object
};

const mapStateToProps = state => {
    return {
        latestNews: state.news.latestNews
    }
}

export default connect(mapStateToProps, {getLatestNews})(LatestNewsPage);