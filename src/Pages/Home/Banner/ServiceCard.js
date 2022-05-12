import React from 'react';

const ServiceCard = ({ service }) => {
    const {_id, img, name, description} = service;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;