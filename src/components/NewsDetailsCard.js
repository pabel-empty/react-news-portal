import React from 'react';
import {Link} from "react-router-dom";
import Moment from "react-moment";

function NewsDetailsCard({news}) {
    // eslint-disable-next-line no-unused-vars
    const {author, category, description, id, image, language, published, title, url} = news.news;
    return (
        <div className="single-post-box">
            <div className="title-post">
                <h1>
                    {title}
                </h1>
                <ul className="post-tags">
                    <li>
                        <i className="far fa-clock"/>
                        <Moment fromNow interval={60}>{published}</Moment>
                    </li>
                    <li>
                        <i className="fa fa-user"/>
                        by <Link to={author}>{author}</Link>
                    </li>
                    <li>
                        <i className="fas fa-th-large"/>
                        {category[0].toUpperCase()}
                    </li>
                </ul>
            </div>
            <div className="post-gallery">
                <img src={image !== 'None' ? image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'} alt=""/>
            </div>
            <div className="post-content">
                <p>{description}</p>
            </div>

        </div>
    );
}

export default NewsDetailsCard;