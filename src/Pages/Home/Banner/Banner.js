import React from 'react';
import bannerImg from '../../../assets/images/chair.png';
import bgChair from '../../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';


const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <img className='container' src={bgChair} alt="" />
            <div className="hero-content flex-col lg:flex-row-reverse container ">
                <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your new smille start here</h1>
                    <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, sequi eveniet? Sit autem repellat veritatis ipsam totam. Laboriosam optio eligendi dicta numquam ad asperiores illum obcaecati labore cum, harum ex.</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;