import React from 'react';
import Banner from './Banner/Banner';
import Info from './Banner/Info';
import Service from './Banner/Service';
import Appointment from './Appointment/Appointment';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;