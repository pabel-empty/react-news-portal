import React from 'react';
import {Link} from "react-router-dom";
import Moment from "react-moment";

function NewsCard({news}) {
    const { title, author, image, category, published } = news;
    return (
        <div className="item news-post standard-post">
            <div className="post-gallery">
                <img src={image !== 'None' ? image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'} alt={image}/>
                <Link className="category-post world" to={category[0]}>{category[0]}</Link>
            </div>
            <div className="post-content">
                <h2><Link to={{pathname: '/news-details'}} state={{news: news}}>
                    {title.substring(0, 80)}{title.length >= 80 && '...'}
                </Link></h2>
                <ul className="post-tags">
                    <li><i className="far fa-clock"/><Moment fromNow interval={60}>{published}</Moment></li>
                    <li><i className="fa fa-user"/>by <Link to={author}>
                        {author.substring(0, 30)}{author.length >= 30 && '...'}
                    </Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NewsCard;