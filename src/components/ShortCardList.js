import React from 'react';
import {Link} from "react-router-dom";
import Moment from "react-moment";

function ShortCardList(props) {
    return (
        props.news === undefined || props.news === null ? <li className="clearfix">
            <div className="utf_post_block_style post-float clearfix">
                <div className="utf_post_thumb"><Link to="#"> <img className="img-fluid"
                                                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
                                                                  alt=""/> </Link></div>
                <div className="utf_post_content">
                    <h2 className="utf_post_title title-small"><Link to="#">This is title</Link></h2>
                    <div className="utf_post_meta"><span className="utf_post_author"><i
                        className="fa fa-user"/> <Link to="#">John Wick</Link></span> <span
                        className="utf_post_date"><i className="far fa-clock"/> 25 Jan, 2022</span>
                    </div>
                </div>
            </div>
        </li> : <li className="clearfix">
            <div className="utf_post_block_style post-float clearfix">
                <div className="utf_post_thumb"><Link to={{pathname: '/news-details'}} state={{news: props.news}}> <img className="img-fluid"
                                                                   src={props.news.image !== 'None' ? props.news.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'}
                                                                   alt=""/> </Link></div>
                <div className="utf_post_content">
                    <h2 className="utf_post_title title-small"><Link to={{pathname: '/news-details'}} state={{news: props.news}}>
                        {props.news.title.substring(0, 80)}{props.news.title.length >= 80 && '...'}
                    </Link></h2>
                    <div className="utf_post_meta"><span className="utf_post_author"><i
                        className="fa fa-user"/> <Link to="#">{props.news.author}</Link></span> <span
                        className="utf_post_date"><i className="far fa-clock"/>
                        <Moment interval={60} fromNow >{props.news.published}</Moment>
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ShortCardList;