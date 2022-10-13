import React, { useState } from 'react';
import './Banner.scss'
import { FaSearch } from 'react-icons/fa';
const Banner = () => {
    const [input, setInput] = useState();
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>The Joke Bible</h1>
                <h3>Daily Laughs for you and yours</h3>
                <div className="banner-search-container">
                    <form>
                        <div className="banner-search-container-search-box">
                            <input className='banner-search-container-inputBox' id='searchInput' placeholder='How can we make you laugh today?'/>
                            <button type="submit"><FaSearch style={{color: "white"}}/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;