import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import SearchBox from "./SearchBox";
import SearchBar from "./SearchBar";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getSearchNews} from "../store/actions/news-actions";

class Navbar extends Component {


    renderSearchedBox() {
        if(this.props.searchedNews !== null) {
            if(this.props.searchedNews.news.length === 0){
                return <div className="news_search_box">
                    <div className="utf_list_post_block">
                        <h3>Search result empty</h3>
                    </div>
                </div>
            }
            return <SearchBox searchedNews={this.props.searchedNews}/>
        }
    }

    render() {
        const onSearchSubmit = term => {
            this.props.getSearchNews({keywords:term})
        }

        return (
            <header className="header" id="header">
                <nav className="navbar container">
                    <Link to={'/'} className="brand">Brand News</Link>
                    <div className="search_menu_wrapper">
                        <div className="search">
                            <SearchBar onSearchSubmit={term => onSearchSubmit(term)}/>
                            { this.renderSearchedBox() }
                        </div>
                        <div className="menu" id="menu">
                            <ul className="menu-inner">
                                <li className="menu-item"><NavLink to={'/latest'} className="menu-link">Latest</NavLink></li>
                                <li className="menu-item"><NavLink to={'/sports'} className="menu-link">Sports</NavLink></li>
                                <li className="menu-item"><NavLink to={'/business'} className="menu-link">Business</NavLink></li>
                                <li className="menu-item"><NavLink to={'/entertainment'} className="menu-link">Entertainment</NavLink></li>
                                <li className="menu-item"><NavLink to={'/lifestyle'} className="menu-link">Lifestyle</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="burger" id="burger">
                        <span className="burger-line"/>
                        <span className="burger-line"/>
                        <span className="burger-line"/>
                    </div>
                </nav>
            </header>
        );
    }
}

Navbar.propTypes = {
    getSearchNews: PropTypes.func.isRequired,
    searchedNews: PropTypes.object
}

const mapStateToProps = state => {
    return {
        searchedNews: state.news.searchedNews
    }
}

export default connect(mapStateToProps, {getSearchNews})(Navbar);