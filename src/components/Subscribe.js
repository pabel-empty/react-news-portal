import React from 'react';

const Subscribe = () => {
    return (
        <div className="widget subscribe-widget">
            <form className="subscribe-form">
                <h1>Subscribe to RSS Feeds</h1>
                <input
                    type="text"
                    name="sumbscribe"
                    id="subscribe"
                    placeholder="Email"
                />
                <button id="submit-subscribe">
                    <i className="fa fa-arrow-circle-right" />
                </button>
                <p>
                    Get all latest content delivered to your email a few times a
                    month.
                </p>
            </form>
        </div>
    );
};

export default Subscribe;