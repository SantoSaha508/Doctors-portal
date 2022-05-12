import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';



const Info = () => {
    
    return (
        <div className='container grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Oppening Our" bgColor="bg-gradient-to-r from-secondary to-primary" cardText="Every day 10 am to 9 pm"  img={clock}></InfoCard>
            <InfoCard cardTitle="Our Location" bgColor="bg-accent"  cardText="8/8 Shukrabad, Dhanmondi, Dhaka 1230" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us" bgColor="bg-gradient-to-r from-secondary to-primary" cardText="Phone: 01799999509"  img={phone}></InfoCard>
        </div>
    );
};

export default Info;