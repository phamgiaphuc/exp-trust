import React from 'react';
import ExpCard from './ExpCard';

const Career = () => {
  return (
    <div className='flex flex-col gap-2  items-center'>
      <h1 className='font-bold text-3xl '>Career</h1>
      <ExpCard
        verify='rejected'
        title='Front-end Developer'
        exp='2 years of FE'
        provider='son'
        date='1/1/2024'
      ></ExpCard>
    </div>
  );
};

export default Career;
