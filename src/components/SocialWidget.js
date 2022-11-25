import React from 'react';
import {Link} from "react-router-dom";

function SocialWidget(props) {

    return (
        <div className="widget social-widget">
            <div className="title-section">
                <h1>
                    <span>Stay Connected</span>
                </h1>
            </div>
            <ul className="social-share">
                <li>
                    <Link to="#" className="rss">
                        <i className="fa fa-rss" />
                    </Link>
                    <span className="number">9,455</span>
                    <span>Subscribers</span>
                </li>
                <li>
                    <Link to="#" className="facebook">
                        <i className="fab fa-facebook-f"/>
                    </Link>
                    <span className="number">56,743</span>
                    <span>Fans</span>
                </li>
                <li>
                    <Link to="#" className="twitter">
                        <i className="fab fa-twitter"/>
                    </Link>
                    <span className="number">43,501</span>
                    <span>Followers</span>
                </li>
                <li>
                    <Link to="#" className="google">
                        <i className="fab fa-google-plus-g"/>
                    </Link>
                    <span className="number">35,003</span>
                    <span>Followers</span>
                </li>
            </ul>
        </div>
    );
}

export default SocialWidget;