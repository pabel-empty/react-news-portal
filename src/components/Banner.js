import React from 'react';
import BannerNewsCard from "./BannerNewsCard";
import {Link} from "react-router-dom";
import Moment from "react-moment";

function Banner({latestNews}) {
    return (
        <div className="row">
            <div className="col-lg-7 col-md-12 pad-r">
                <div id="utf_featured_slider" className="owl-carousel owl-theme utf_featured_slider">
                    <BannerNewsCard news={latestNews[0]}/>
                </div>
            </div>

            <div className="col-lg-5 col-md-12 pad-l">
                <div className="row">
                    <div className="col-md-12">
                        <div className="utf_post_overaly_style contentTop hot-post-top clearfix">
                            <div className="utf_post_thumb">
                                <Link to="#">
                                    <img
                                        className="img-fluid"
                                        src={latestNews[1].image !== 'None' ? latestNews[1].image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'}
                                        alt=""/>
                                </Link>
                            </div>
                            <div className="utf_post_content">
                                <Link className="utf_post_cat" to="#">{latestNews[1].category[0]}</Link>
                                <h2 className="utf_post_title title-large"><Link to={{pathname: '/news-details'}} state={{news: latestNews[1]}}>
                                    {latestNews[1].title}
                                </Link></h2>
                                <span className="utf_post_author"><i className="fa fa-user"/><Link
                                    to="#">{latestNews[1].author}</Link></span>
                                <span className="utf_post_date"><i className="far fa-clock"/> <Moment interval={60} fromNow >{latestNews[1].published}</Moment></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 pad-r-small">
                        <div className="utf_post_overaly_style contentTop utf_hot_post_bottom clearfix">
                            <div className="utf_post_thumb"><Link to="#">
                                <img className="img-fluid"
                                     src={latestNews[2].image !== 'None' ? latestNews[2].image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'}
                                                                             alt=""/></Link></div>
                            <div className="utf_post_content"><Link className="utf_post_cat" to="#">
                                {latestNews[2].category[0]}
                            </Link>
                                <h2 className="utf_post_title title-medium"><Link to={{pathname: '/news-details'}} state={{news: latestNews[2]}}>
                                    {latestNews[2].title.substring(0, 50)}{latestNews[2].title.length >= 50 && '...'}
                                </Link></h2>
                                <div className="utf_post_meta"><span className="utf_post_author"><i
                                    className="fa fa-user"/> <Link to="#">{latestNews[2].author}</Link></span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 pad-l-small">
                        <div className="utf_post_overaly_style contentTop utf_hot_post_bottom clearfix">
                            <div className="utf_post_thumb"><Link to="#">
                                <img className="img-fluid" src={latestNews[3].image !== 'None' ? latestNews[3].image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'}
                                                                             alt=""/></Link></div>
                            <div className="utf_post_content"><Link className="utf_post_cat" to="#">
                                {latestNews[3].category[0]}
                            </Link>
                                <h2 className="utf_post_title title-medium"><Link to={{pathname: '/news-details'}} state={{news: latestNews[3]}}>
                                    {latestNews[3].title.substring(0, 50)}{latestNews[3].title.length >= 50 && '...'}
                                </Link></h2>
                                <div className="utf_post_meta"><span className="utf_post_author"><i
                                    className="fa fa-user"/> <Link to="#">{latestNews[3].author}</Link></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;