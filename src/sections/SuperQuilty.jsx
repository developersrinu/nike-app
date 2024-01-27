import React from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
const SuperQuilty = () => {
  return (
    <section id='about-us'
      className=' flex justify-between item-center max-lg:flex-col gap-10 w-full max-container'>

      <div className=' flex flex-1 flex-col '>

        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          we provide you
          <span className='text-coral-red'> super </span>
          <span className='text-coral-red'>quality</span> shoes

        </h2>


        <p className='mt-4 lg:max-w-lg info-text '>

          Ensureing premium comfort and style,our meticulosly crafted footer wear is designed to elevate your exprience,providing you with unmatch quality innovation,and a touch of elegance

        </p>


        <p className='mt-4 lg:max-w-lg info-text mb-8'>
              Our dedication to details and excellence ensure your satisfaction
        </p>



        <Button label='Veiw details' iconUrl={arrowRight} />

      </div>

      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="logo" 
        width={570}
        height={520}
        className=' object-contain'
        />
      </div>

    </section>
  )
}

export default SuperQuilty