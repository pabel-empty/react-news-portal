import axios from '../../utils/axios-config';
import {
    CLEAR_SEARCHED_DATA,
    SET_BUSINESS_NEWS,
    SET_CATEGORIES, SET_ENTERTAINMENT_NEWS, SET_HEALTH_NEWS,
    SET_LANGUAGES,
    SET_LATEST_NEWS, SET_LIFESTYLE_NEWS,
    SET_NEWS_ERRORS,
    SET_REGIONS,
    SET_SEARCHED_NEWS, SET_SPORTS_NEWS, SET_TECHNOLOGY_NEWS
} from "../types/news-types";

const key = "r_flk26TGrhLinzpbsca4YIhTlZi10dPn5ooh11XwSwqNNCw";

// Get latest news
export const getLatestNews = () => dispatch => {
    axios.get(`/latest-news?apiKey=${key}`)
        .then(response => {
            dispatch({
               type: SET_LATEST_NEWS,
               payload: response.data
            });
        }).catch(err => {
            dispatch({
                type: SET_NEWS_ERRORS,
                payload: err.response
            });
        });
}


// Get Search News
export const getSearchNews = ({language=null, keywords=null, country=null, category=null, start_date=null, end_date=null}) => dispatch => {
    let url = `/search?apiKey=${key}`;
    // eslint-disable-next-line no-unused-expressions
    if(language !== null) url += `&language=${language}`;
    // eslint-disable-next-line no-unused-expressions
    if(keywords !== null) url += `&keywords=${keywords}`;
    // eslint-disable-next-line no-unused-expressions
    if(country !== null) url += `&country=${country}`;
    // eslint-disable-next-line no-unused-expressions
    if(category !== null) url += `&category=${category}`;
    // eslint-disable-next-line no-unused-expressions
    if(start_date !== null) url += `&start_date=${start_date}`;
    // eslint-disable-next-line no-unused-expressions
    if(end_date !== null) url += `&end_date=${end_date}`;

    axios.get(url)
        .then(response => {
            dispatch({
                type: SET_SEARCHED_NEWS,
                payload: response.data
            });
        }).catch(err => {
            dispatch({
                type: SET_NEWS_ERRORS,
                payload: err.response
            });
        });
}


// Get languages
export const getLanguages = () => dispatch => {
    axios.get(`/available/languages?apiKey=${key}`)
        .then(response => {
            dispatch({
                type: SET_LANGUAGES,
                payload: response.data
            })
        }).catch(err => {
            dispatch({
                type: SET_NEWS_ERRORS,
                payload: err.response
            });
        });
}


// Get regions
export const getRegions = () => dispatch => {
    axios.get(`/available/regions?apiKey=${key}`)
        .then(response => {
            dispatch({
                type: SET_REGIONS,
                payload: response.data
            });
        }).catch(err => {
            dispatch({
                type: SET_NEWS_ERRORS,
                payload: err.response
            });
        });
}


// Get Categories
export const getCategories = () => dispatch => {
    axios.get(`/available/category?apiKey=${key}`)
        .then(response => {
            dispatch({
                type: SET_CATEGORIES,
                payload: response.data
            });
        })
        .catch(err => {
            dispatch({
                type: SET_NEWS_ERRORS,
                payload: err.response
            });
        });
}


// Get Technology News
export const getTechnologyNews = ({language=null, keywords=null, country=null, category=null, start_date=null, end_date=null}) => dispatch => {
    let url = `/search?apiKey=${key}`;
    // eslint-disable-next-line no-unused-expressions
    if(language !== null) url += `&language=${language}`;
    // eslint-disable-next-line no-unused-expressions
    if(country !== null) url += `&country=${country}`;
    // eslint-disable-next-line no-unused-expressions
    if(category !== null) url += `&category=${category}`;
    // eslint-disable-next-line no-unused-expressions
    if(keywords !== null) url += `&keywords=${keywords}`;
    // eslint-disable-next-line no-unused-expressions
    if(start_date !== null) url += `&start_date=${start_date}`;
    // eslint-disable-next-line no-unused-expressions
    if(end_date !== null) url += `&end_date=${end_date}`;

    axios.get(url)
        .then(response => {
            dispatch({
                type: SET_TECHNOLOGY_NEWS,
                payload: response.data
            });
        }).catch(err => {
        dispatch({
            type: SET_NEWS_ERRORS,
            payload: err.response
        });
    });
}


// Get Sports News
export const getSportsNews = ({language=null, keywords=null, country=null, category=null, start_date=null, end_date=null}) => dispatch => {
    let url = `/search?apiKey=${key}`;
    // eslint-disable-next-line no-unused-expressions
    if(language !== null) url += `&language=${language}`;
    // eslint-disable-next-line no-unused-expressions
    if(keywords !== null) url += `&keywords=${keywords}`;
    // eslint-disable-next-line no-unused-expressions
    if(country !== null) url += `&country=${country}`;
    // eslint-disable-next-line no-unused-expressions
    if(category !== null) url += `&category=${category}`;
    // eslint-disable-next-line no-unused-expressions
    if(start_date !== null) url += `&start_date=${start_date}`;
    // eslint-disable-next-line no-unused-expressions
    if(end_date !== null) url += `&end_date=${end_date}`;

    axios.get(url)
        .then(response => {
            dispatch({
                type: SET_SPORTS_NEWS,
                payload: response.data
            });
        }).catch(err => {
        dispatch({
            type: SET_NEWS_ERRORS,
            payload: err.response
        });
    });
}


// Get Business News
export const getBusinessNews = ({language=null, keywords=null, country=null, category=null, start_date=null, end_date=null}) => dispatch => {
    let url = `/search?apiKey=${key}`;
    // eslint-disable-next-line no-unused-expressions
    if(language !== null) url += `&language=${language}`;
    // eslint-disable-next-line no-unused-expressions
    if(keywords !== null) url += `&keywords=${keywords}`;
    // eslint-disable-next-line no-unused-expressions
    if(country !== null) url += `&country=${country}`;
    // eslint-disable-next-line no-unused-expressions
    if(category !== null) url += `&category=${category}`;
    // eslint-disable-next-line no-unused-expressions
    if(start_date !== null) url += `&start_date=${start_date}`;
    // eslint-disable-next-line no-unused-expressions
    if(end_date !== null) url += `&end_date=${end_date}`;

    axios.get(url)
        .then(response => {
            dispatch({
                type: SET_BUSINESS_NEWS,
                payload: response.data
            });
        }).catch(err => {
        dispatch({
            type: SET_NEWS_ERRORS,
            payload: err.response
        });
    });
}


// Get Entertainment News
export const getEntertainmentNews = ({language=null, keywords=null, country=null, category=null, start_date=null, end_date=null}) => dispatch => {
    let url = `/search?apiKey=${key}`;
    // eslint-disable-next-line no-unused-expressions
    if(language !== null) url += `&language=${language}`;
    // eslint-disable-next-line no-unused-expressions
    if(keywords !== null) url += `&keywords=${keywords}`;
    // eslint-disable-next-line no-unused-expressions
    if(country !== null) url += `&country=${country}`;
    // eslint-disable-next-line no-unused-expressions
    if(category !== null) url += `&category=${category}`;
    // eslint-disable-next-line no-unused-expressions
    if(start_date !== null) url += `&start_date=${start_date}`;
    // eslint-disable-next-line no-unused-expressions
    if(end_date !== null) url += `&end_date=${end_date}`;

    axios.get(url)
        .then(response => {
            dispatch({
                type: SET_ENTERTAINMENT_NEWS,
                payload: response.data
            });
        }).catch(err => {
        dispatch({
            type: SET_NEWS_ERRORS,
            payload: err.response
        });
    });
}


// Get LifeStyle News
export const getLifeStyleNews = ({language=null, keywords=null, country=null, category=null, start_date=null, end_date=null}) => dispatch => {
    let url = `/search?apiKey=${key}`;
    // eslint-disable-next-line no-unused-expressions
    if(language !== null) url += `&language=${language}`;
    // eslint-disable-next-line no-unused-expressions
    if(keywords !== null) url += `&keywords=${keywords}`;
    // eslint-disable-next-line no-unused-expressions
    if(country !== null) url += `&country=${country}`;
    // eslint-disable-next-line no-unused-expressions
    if(category !== null) url += `&category=${category}`;
    // eslint-disable-next-line no-unused-expressions
    if(start_date !== null) url += `&start_date=${start_date}`;
    // eslint-disable-next-line no-unused-expressions
    if(end_date !== null) url += `&end_date=${end_date}`;

    axios.get(url)
        .then(response => {
            dispatch({
                type: SET_LIFESTYLE_NEWS,
                payload: response.data
            });
        }).catch(err => {
        dispatch({
            type: SET_NEWS_ERRORS,
            payload: err.response
        });
    });
}


// Get Health News
export const getHealthNews = ({language=null, keywords=null, country=null, category=null, start_date=null, end_date=null}) => dispatch => {
    let url = `/search?apiKey=${key}`;
    // eslint-disable-next-line no-unused-expressions
    if(language !== null) url += `&language=${language}`;
    // eslint-disable-next-line no-unused-expressions
    if(keywords !== null) url += `&keywords=${keywords}`;
    // eslint-disable-next-line no-unused-expressions
    if(country !== null) url += `&country=${country}`;
    // eslint-disable-next-line no-unused-expressions
    if(category !== null) url += `&category=${category}`;
    // eslint-disable-next-line no-unused-expressions
    if(start_date !== null) url += `&start_date=${start_date}`;
    // eslint-disable-next-line no-unused-expressions
    if(end_date !== null) url += `&end_date=${end_date}`;

    axios.get(url)
        .then(response => {
            dispatch({
                type: SET_HEALTH_NEWS,
                payload: response.data
            });
        }).catch(err => {
        dispatch({
            type: SET_NEWS_ERRORS,
            payload: err.response
        });
    });
}


export const clearSearchedData = () => dispatch => {
    dispatch({
        type: CLEAR_SEARCHED_DATA,
        payload: null
    })
}
