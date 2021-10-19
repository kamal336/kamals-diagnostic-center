import React from 'react';
import Instruments from '../instruments/Instruments';
import Services from '../Services/Services/Services';
import Banner from './../Banner/Banner';


const Home = () => {
    return (
        <div>
         <Banner />
         <Services />
         <Instruments />
        </div>
    );
};

export default Home;