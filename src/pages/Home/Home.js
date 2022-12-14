import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import FooterBanner from '../../components/FooterBanner/FooterBanner';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Button label="button"/>
            <Card title="" jokeText=""/>
            <FooterBanner/>
        </div>
    );
};

export default Home;