import React from 'react';
import Events from '../Events/Events';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';

const Home = () => {
    return (
        <div className="home_area">
            <Header />
            <SearchBox />
            <Events />
        </div>
    );
};

export default Home;