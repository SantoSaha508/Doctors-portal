import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Appointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white sm:p-4'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl'>Make an Appointment Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quas iste facilis, placeat blanditiis quis dolores cum, veritatis quos omnis nemo ex perferendis numquam beatae ratione ipsa dolorum commodi quam?
                </p>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default Appointment;