import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsCard from "../components/NewsCard";
import {connect} from "react-redux";
import {getSportsNews} from "../store/actions/news-actions";
import SectionTitle from "../components/SectionTitle";

class SportsPage extends Component {

    componentDidMount() {
        this.props.getSportsNews({category: 'sports'});
    }

    renderNewsCard() {
        if(this.props.sportsNews !== null){
            // eslint-disable-next-line array-callback-return
            return this.props.sportsNews.news.map(n => <div className="col-lg-3 mb-4" key={n.id}>
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
                        <SectionTitle titleName={'Sports News'}/>
                    </div>
                </div>
                <div className="row">
                    {this.renderNewsCard()}
                </div>
            </div>
        );
    }
}

SportsPage.propTypes = {
    getSportsNews: PropTypes.func.isRequired,
    sportsNews: PropTypes.object
};

const mapStateToProps = state => {
    return {
        sportsNews: state.news.sportsNews
    }
}

export default connect(mapStateToProps, {getSportsNews})(SportsPage);