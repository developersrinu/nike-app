import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'
const PopularProducts = () => {
  return (
    <section id='products'
    className='max-container max-sm:mt-12 justify-start flex-col gap-5'
    >
      <h2 className='text-4xl font-bold font-palanquin'>our <span className='text-coral-red '>popular</span> products</h2>
      <p className=' lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experince top-notch qulity and style with our sought-after selection. disccover and value </p>
     
     <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
      {
        products.map((product)=>(
          <PopularProductCard key = {product.name} {...product}/>
        ))
      }

     </div>

    </section>
  )
}

export default PopularProducts