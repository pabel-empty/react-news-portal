import React, {useEffect, useState} from 'react';
import {clearSearchedData} from "../store/actions/news-actions";
import {useDispatch, useSelector} from "react-redux";

const SearchBar = ({onSearchSubmit}) => {

    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.news.searchedNews);

    useEffect(() => {
        if(selector === null){
            setDebouncedTerm('')
        }
    },[selector])

    useEffect(() => {
        const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
        return () => clearTimeout(timer);
    }, [debouncedTerm]);
    
    useEffect(() => {
        if(term !== ''){
            onSearchSubmit(term);
        }
    }, [term]);

    function clearSearchedHistory(e) {
        e.preventDefault();
        setDebouncedTerm('')
        dispatch(clearSearchedData());
    }

    return (
        <form className="search-form">
            <input
                type="text"
                name="search"
                className="search-input"
                placeholder="Search for Destinations"
                onChange={e => setDebouncedTerm(e.target.value)}
                value={debouncedTerm}/>
            {
                term !== '' && <button onClick={clearSearchedHistory} className="search-submit" ><i className="fas fa-times"/></button>
            }
        </form>
    );
};

export default SearchBar;