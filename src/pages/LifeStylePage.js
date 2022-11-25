import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsCard from "../components/NewsCard";
import {connect} from "react-redux";
import {getLifeStyleNews} from "../store/actions/news-actions";
import SectionTitle from "../components/SectionTitle";

class LifeStylePage extends Component {

    componentDidMount() {
        this.props.getLifeStyleNews({category: 'lifestyle'});
    }

    renderNewsCard() {
        if(this.props.lifeStyleNews !== null){
            // eslint-disable-next-line array-callback-return
            return this.props.lifeStyleNews.news.map(n => <div className="col-lg-3 mb-4" key={n.id}>
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
                        <SectionTitle titleName={'Lifestyle News'}/>
                    </div>
                </div>
                <div className="row">
                    {this.renderNewsCard()}
                </div>
            </div>
        );
    }
}

LifeStylePage.propTypes = {
    getLifeStyleNews: PropTypes.func.isRequired,
    lifeStyleNews: PropTypes.object
};

const mapStateToProps = state => {
    return {
        lifeStyleNews: state.news.lifeStyleNews
    }
}

export default connect(mapStateToProps, {getLifeStyleNews})(LifeStylePage);