import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-center text-4xl font-bold '>
        What Our
        <span className='text-coral-red'> Customers </span>
        says ?
      </h3>
      <p className=' info-text m-auto mt-4 max-w-lg text-center'>
        Hear genuie stories from out satisfied customer about their exceptional experience with us
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>

        {
          reviews.map((reveiw) => (
            <ReviewCard key={reveiw.customerName}
              imgURL={reveiw.imgURL}
              customerName={reveiw.customerName}
              rating={reveiw.rating}
              feedback = {reveiw.feedback}
            />
          ))
        }

      </div>

    </section>
  )
}

export default CustomerReviews