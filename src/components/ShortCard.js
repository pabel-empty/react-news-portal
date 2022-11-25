import React from 'react';
import {Link} from "react-router-dom";
import Moment from "react-moment";

function ShortCard(props) {
    return (
        <div className="utf_post_overaly_style clearfix">
            <div className="utf_post_thumb">
                <Link to="#">
                    <img className="img-fluid" src={props.titleNews.image !== 'None' ? props.titleNews.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'} alt=""/>
                </Link>
            </div>
            <div className="utf_post_content">
                <h2 className="utf_post_title"><Link to={{pathname: '/news-details'}} state={{news: props.titleNews}}>
                    {props.titleNews.title.substring(0, 80)}{props.titleNews.title.length >= 80 && '...'}
                </Link></h2>
                <div className="utf_post_meta"><span className="utf_post_author"><i
                    className="fa fa-user"/> <Link href="#">{props.titleNews.author}</Link></span> <span
                    className="utf_post_date"><i className="far fa-clock"/><Moment interval={60} fromNow >{props.titleNews.published}</Moment></span>
                </div>
            </div>
        </div>
    );
}

export default ShortCard;