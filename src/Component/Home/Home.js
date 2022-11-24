import React from 'react';
import AdviserItems from '../AdviserItems/AdviserItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdviserItems></AdviserItems>
            <Categories></Categories>
            
        </div>
    );
};

export default Home;