import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsCard from "../components/NewsCard";
import {connect} from "react-redux";
import {getBusinessNews} from "../store/actions/news-actions";
import SectionTitle from "../components/SectionTitle";

class BusinessPage extends Component {

    componentDidMount() {
        this.props.getBusinessNews({category: 'business'});
    }

    renderNewsCard() {
        if(this.props.businessNews !== null){
            // eslint-disable-next-line array-callback-return
            return this.props.businessNews.news.map(n => <div className="col-lg-3 mb-4" key={n.id}>
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
                        <SectionTitle titleName={'Business News'}/>
                    </div>
                </div>
                <div className="row">
                    {this.renderNewsCard()}
                </div>
            </div>
        );
    }
}

BusinessPage.propTypes = {
    getBusinessNews: PropTypes.func.isRequired,
    businessNews: PropTypes.object
};

const mapStateToProps = state => {
    return {
        businessNews: state.news.businessNews
    }
}

export default connect(mapStateToProps, {getBusinessNews})(BusinessPage);