import {combineReducers} from "redux";
import newsReducer from "./news-reducer";

const rootReducer = combineReducers({
    news: newsReducer
});
export default rootReducer;
