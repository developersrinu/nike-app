import React from 'react';
import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';  // Assuming you have a ServiceCard component

const Service = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service, i) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Service;
