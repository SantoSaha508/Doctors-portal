import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl ">
            <div class="card-body ">
                <div className='text-center'>
                    <h2 class="font-bold text-xl text-primary">{name}</h2>
                    <p>
                        {
                            slots.length > 0 ?
                                <span>{slots[0]}</span>
                                :
                                <span className='text-red-500'>Try another day!</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                </div>
                <div class="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        for="booking-modal"
                        class="btn btn-primary text-white">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;