import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsCard from "../components/NewsCard";
import {connect} from "react-redux";
import {getEntertainmentNews} from "../store/actions/news-actions";
import SectionTitle from "../components/SectionTitle";

class EntertainmentPage extends Component {

    componentDidMount() {
        this.props.getEntertainmentNews({category: 'entertainment'});
    }

    renderNewsCard() {
        if(this.props.entertainmentNews !== null){
            // eslint-disable-next-line array-callback-return
            return this.props.entertainmentNews.news.map(n => <div className="col-lg-3 mb-4" key={n.id}>
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
                        <SectionTitle titleName={'Entertainment News'}/>
                    </div>
                </div>
                <div className="row">
                    {this.renderNewsCard()}
                </div>
            </div>
        );
    }
}

EntertainmentPage.propTypes = {
    getEntertainmentNews: PropTypes.func.isRequired,
    entertainmentNews: PropTypes.object
};

const mapStateToProps = state => {
    return {
        entertainmentNews: state.news.entertainmentNews
    }
}

export default connect(mapStateToProps, {getEntertainmentNews})(EntertainmentPage);