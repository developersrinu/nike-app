import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import PopularProducts from './sections/PopularProducts';
import SuperQuilty from './sections/SuperQuilty';
import Service from './sections/Service';
import SpecialOffer from './sections/SpecialOffer';
import CustomerReviews from './sections/CustomerReviews';
import Subscribe from './sections/Subscribe';
import Fotter from './sections/Fotter';


const App = () => {
  return (
    <main className='relative'>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>

      {/* Popular Products Section */}
      <section className='padding'>
        <PopularProducts />
      </section>

      {/* Super Quality Section */}
      <section className='padding'>
        <SuperQuilty />
      </section>

      {/* Service Section */}
      <section className='padding'>
        <Service />
      </section>

      {/* Special Offer Section */}
      <section className='padding'>
        <SpecialOffer />
      </section>

      {/* Customer Reviews Section */}
      <section className='padding bg-pale-blue'>
        <CustomerReviews />
      </section>

      {/* Subscribe Section */}
      <section className='padding sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>

      {/* Footer Section */}
      <section className='padding bg-black padding-x padding-b pb-8'>
        <Fotter />
      </section>
    </main>
  );
};

export default App;

