import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>

      <div className="flex-1 ">
        <img src={offer} alt="offer" width={773} height={687} className='object-contain min-w-full' />
      </div>

      <div className=' flex flex-1 flex-col '>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'> Special </span>
          Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text  font-serif'>
         
        Embark on a shopping journey that redefines your experience with unbeatable deals. From a premier selection to incredible savings, we offer unparalleled value that sets us apart

        </p>
        <p className='mt-4 lg:max-w-lg info-text mb-8'>
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className='flex flex-wrap'>
        <Button label='Veiw details' iconUrl={arrowRight} />
        <Button label='Veiw details' iconUrl={arrowRight} />
        </div>
       

      </div>


    </section>
  )
}

export default SpecialOffer