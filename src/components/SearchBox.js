import React from 'react';
import ShortCardList from "./ShortCardList";
import {useDispatch} from "react-redux";
import {clearSearchedData} from "../store/actions/news-actions";

function SearchBox({searchedNews}) {
    const {news} = searchedNews !== null && searchedNews;
    const dispatch = useDispatch();
    return (
        <div className="news_search_box" onFocus={() => {
            setTimeout(() => {
                dispatch(clearSearchedData())
            }, 200);
        }}>
            <div className="utf_list_post_block">
                <ul className="utf_list_post">
                    {
                        searchedNews !== null && news.map(n => {
                            return <ShortCardList key={n.id} news={n}/>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default SearchBox;