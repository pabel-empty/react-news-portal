import React from 'react';
import {Link} from "react-router-dom";

function NewsTab(props) {

    return (
        <div className="widget tab-posts-widget">
            <ul className="nav nav-tabs" id="myTab">
                <li className="">
                    <Link to="#option1" data-toggle="tab" aria-expanded="false">
                        Popular
                    </Link>
                </li>
                <li className="">
                    <Link to="#option2" data-toggle="tab" aria-expanded="false">
                        Recent
                    </Link>
                </li>
                <li className="active">
                    <Link to="#option3" data-toggle="tab" aria-expanded="true">
                        Top Reviews
                    </Link>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane" id="option1">
                    <ul className="list-posts">
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Pellentesque odio nisi, euismod in, pharetra a,
                                        ultricies in, diam.{" "}
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Sed arcu. Cras consequat.{" "}
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Phasellus ultrices nulla quis nibh. Quisque a lectus.
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Donec consectetuer ligula vulputate sem tristique
                                        cursus.{" "}
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Nam nulla quam, gravida non, commodo a, sodales sit
                                        amet, nisi.{" "}
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="tab-pane" id="option2">
                    <ul className="list-posts">
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Phasellus ultrices nulla quis nibh. Quisque a lectus.{" "}
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Donec consectetuer ligula vulputate sem tristique
                                        cursus.{" "}
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Nam nulla quam, gravida non, commodo a, sodales sit
                                        amet, nisi.
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Pellentesque odio nisi, euismod in, pharetra a,
                                        ultricies in, diam.{" "}
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">Sed arcu. Cras consequat.</Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="tab-pane active" id="option3">
                    <ul className="list-posts">
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Donec consectetuer ligula vulputate sem tristique
                                        cursus.{" "}
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Pellentesque odio nisi, euismod in, pharetra a,
                                        ultricies in, diam.{" "}
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Phasellus ultrices nulla quis nibh. Quisque a lectus.
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">Sed arcu. Cras consequat.</Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="post-content">
                                <h2>
                                    <Link to="single-post.html">
                                        Nam nulla quam, gravida non, commodo a, sodales sit
                                        amet, nisi.
                                    </Link>
                                </h2>
                                <ul className="post-tags">
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        27 may 2013
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NewsTab;