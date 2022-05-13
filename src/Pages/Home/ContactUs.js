import React from 'react';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="text-center my-5 p-4">
            <div className='text-white'>
                <h2 className='text-xl font-bold text-primary'>Contact Us</h2>
                <h1 className='text-3xl'>Stay connected with us</h1>
            </div>
            <div>
                <form>
                    <input type="email" placeholder="Enter email" className="input input-bordered input-sm w-full max-w-xs my-3" /><br />

                    <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs" /><br />

                    <input type="text" placeholder="Enter text" className="input input-bordered input-lg w-full max-w-xs my-3" /><br />
                    <input className='btn bg-primary' type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default ContactUs;