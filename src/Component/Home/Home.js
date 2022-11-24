import React from 'react';
import AdviserItems from '../AdviserItems/AdviserItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import OurTeam from '../OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdviserItems></AdviserItems>
            <Categories></Categories>
           <OurTeam></OurTeam>
            
        </div>
    );
};

export default Home;