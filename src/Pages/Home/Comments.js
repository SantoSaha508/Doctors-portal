import React from 'react';

const Comments = ({ review }) => {
    const { _id, name, img, location } = review;

    return (
        <div className="card bg-base-100 shadow-xl py-5">
            <div className="card-body text-center">
                <p>{review.review}</p>
            </div>
            <div className='flex justify-center items-center '>
                <div className="avatar px-5">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-bold'>{name}</h2>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;