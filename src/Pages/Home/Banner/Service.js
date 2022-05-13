import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whiten from '../../../assets/images/whitening.png';
import teratment from '../../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride treatment",
            description: 'If a dog chews shoes whose shoes does he choose?',
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: 'If a dog chews shoes whose shoes does he choose?',
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: 'If a dog chews shoes whose shoes does he choose?',
            img: whiten
        }
    ]
    return (
        <div >
            <div className='text-center py-10 font-bold text-x'>
                <h4 className='text-primary uppercase'>Our Services</h4>
                <h1>Services we provide</h1>
            </div>
            <div className='grid sm:grid:cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={teratment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-10'>
                        <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem distinctio incidunt fuga nostrum, laudantium consectetur debitis quas dolor laboriosam impedit fugiat molestiae expedita earum recusandae illo, suscipit amet ea.</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;