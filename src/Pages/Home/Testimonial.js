import React from 'react';
import Comments from './Comments';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'this is my first treatment in this center. All the staf are co-operative. All doctors are heighly professional.this is my first treatment in this center. All the staf are co-operative. All doctors are heighly professional.',
            img: people1,
            location: 'California'
        },
        {
            _id: 2,
            name: 'Ema Watson',
            review: 'this is my first treatment in this center. All the staf are co-operative. All doctors are heighly professional.this is my first treatment in this center. All the staf are co-operative. All doctors are heighly professional.',
            img: people2,
            location: 'Washington'
        },
        {
            _id: 3,
            name: 'Micke Jenny',
            review: 'this is my first treatment in this center. All the staf are co-operative. All doctors are heighly professional.this is my first treatment in this center. All the staf are co-operative. All doctors are heighly professional.',
            img: people3,
            location: 'New York'
        },
    ]
    return (
        <div className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-primary font-bold text-lx'>TESTIMONIAL</h2>
                    <h1 className='text-3xl'>What Our Patients says</h1>
                </div>
                <div className=''>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 '>
                {
                    reviews.map(review => <Comments
                    key={review._id}
                    review={review}
                    ></Comments>)
                }
            </div>
        </div>
    );
};

export default Testimonial;