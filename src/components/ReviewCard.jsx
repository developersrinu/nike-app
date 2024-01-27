import React from 'react';
import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={imgURL} alt="logo" className='object-contain w-[120px] h-[120px] rounded-full' />

      <p className=' mt-6 text-center max-w-sm info-text'>{feedback}</p>
      <div className='flex gap-4' >
        <img src={star} alt="" width={24} height={24} className='object-contain m-0' />
        <p className=' mt-1'>({rating})</p>
      </div>
      <h1 className='text-2xl font-bold'>{customerName}</h1>
    </div>
  );
};

export default ReviewCard;
