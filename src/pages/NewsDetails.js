import React, {useEffect} from 'react';
import NewsDetailsCard from "../components/NewsDetailsCard";
import SocialWidget from "../components/SocialWidget";
import NewsTab from "../components/NewsTab";
import Subscribe from "../components/Subscribe";
import PopularTags from "../components/PopularTags";
import {useLocation} from "react-router-dom";

function NewsDetails() {

    const {state} = useLocation();

    useEffect(() => {
        window.scroll(0,0);
    }, [])

    return (
        <section className="block-wrapper margin_fixed_height_reduce">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="block-content">
                            <NewsDetailsCard news={state}/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="sidebar">
                            <SocialWidget/>
                            {/*<NewsTab/>*/}
                            <Subscribe/>
                            <PopularTags/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsDetails;