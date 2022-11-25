import React from 'react';
import {Link} from "react-router-dom";
import Moment from "react-moment";

function BannerNewsCard({news}) {
    return (
        // eslint-disable-next-line react/style-prop-object
        <div className="item">
            <div className="utf_featured_post">
                <div className="utf_post_thumb" style={{
                    height: 'auto'
                }}>
                    <Link to={{pathname: '/news-details'}} state={{news: news}}>
                        <img
                            className="img-fluid"
                            src={news.image !== 'None' ? news.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'}
                            alt=""/>
                    </Link>
                </div>
                <div className="utf_post_content">
                    <Link className="utf_post_cat" to="#">{news.category[0]}</Link>
                    <h2 className="utf_post_title title-extra-large">
                        <Link to={{pathname: '/news-details'}} state={{news: news}}>{news.title}</Link>
                    </h2>
                    <span className="utf_post_author"><i className="fa fa-user"/> <Link
                        to="#">{news.author}</Link></span>
                    <span className="utf_post_date"><i className="far fa-clock"/> <Moment interval={60} fromNow >{news.published}</Moment></span>
                </div>
            </div>
        </div>
    );
}

export default BannerNewsCard;