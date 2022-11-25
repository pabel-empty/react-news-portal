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


// initialState
const initialState = {
    latestNews: null,
    errors: null,
    searchedNews: null,
    regions: null,
    categories: null,
    languages: null,
    lifeStyleNews: null,
    entertainmentNews: null,
    businessNews: null,
    sportsNews: null,
    healthNews: null,
    technologyNews: null
}

const newsReducer = (state = initialState, action) => {
    switch (action.type){
        case CLEAR_SEARCHED_DATA:
            return {
                ...state,
                searchedNews: action.payload
            }
        case SET_LIFESTYLE_NEWS:
            return {
                ...state,
                lifeStyleNews: action.payload
            }
        case SET_ENTERTAINMENT_NEWS:
            return{
                ...state,
                entertainmentNews: action.payload
            }
        case SET_BUSINESS_NEWS:
            return {
                ...state,
                businessNews: action.payload
            }
        case SET_SPORTS_NEWS:
            return {
                ...state,
                sportsNews: action.payload
            }
        case SET_HEALTH_NEWS:
            return {
                ...state,
                healthNews: action.payload
            }
        case SET_TECHNOLOGY_NEWS:
            return {
                ...state,
                technologyNews: action.payload
            }
        case SET_LATEST_NEWS:
            return {
                ...state,
                latestNews: action.payload
            }
        case SET_NEWS_ERRORS:
            return {
                ...state,
                errors: action.payload
            }
        case SET_SEARCHED_NEWS:
            return {
                ...state,
                searchedNews: action.payload
            }
        case SET_REGIONS:
            return {
                ...state,
                regions: action.payload
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case SET_LANGUAGES:
            return {
                ...state,
                languages: action.payload
            }
        default:
            return state
    }
}
export default newsReducer;
