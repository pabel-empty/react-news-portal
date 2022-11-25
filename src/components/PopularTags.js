import React from 'react';
import {Link} from "react-router-dom";

const PopularTags = () => {
    return (
        <>
            <div className="widget tags-widget">
                <div className="title-section">
                    <h1>
                        <span>Popular Tags</span>
                    </h1>
                </div>
                <ul className="tag-list">
                    <li>
                        <Link to="#">News</Link>
                    </li>
                    <li>
                        <Link to="#">Fashion</Link>
                    </li>
                    <li>
                        <Link to="#">Politics</Link>
                    </li>
                    <li>
                        <Link to="#">Sport</Link>
                    </li>
                    <li>
                        <Link to="#">Food</Link>
                    </li>
                    <li>
                        <Link to="#">Videos</Link>
                    </li>
                    <li>
                        <Link to="#">Business</Link>
                    </li>
                    <li>
                        <Link to="#">Travel</Link>
                    </li>
                    <li>
                        <Link to="#">World</Link>
                    </li>
                    <li>
                        <Link to="#">Music</Link>
                    </li>
                </ul>
            </div>
            <div className="advertisement">
                <div className="desktop-advert">
                    <span>Advertisement</span>
                    <img src="" alt="" />
                </div>
                <div className="tablet-advert">
                    <span>Advertisement</span>
                    <img src="" alt="" />
                </div>
                <div className="mobile-advert">
                    <span>Advertisement</span>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    );
};

export default PopularTags;