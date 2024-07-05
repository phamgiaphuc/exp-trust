import React from 'react';

const SubPlan = () => {
  return (
    <div className='flex flex-rows gap-24 w-8/12 h-3/4 items-center justify-center '>
      <div className={BoxStyle}>
        <h1 className='text-2xl'>Free Plan</h1>
        <div className='h-3/4 py-4 flex flex-col gap-4'>
          <div className='flex flex-row items-end gap-4 font-semibold'>
            <h1 className='text-6xl'>0 Sol</h1>
            <h1 className='text-3xl'>per month</h1>
          </div>
          <h1 className='text-2xl text-[#828282]'>0.021 SOL per credential</h1>
        </div>
        <button className={ButtonStyle}>Current Plan</button>
      </div>
      <div className={BoxStyle}>
        <h1 className='text-2xl'>Skilled Plan</h1>
        <div className='h-3/4 py-4 flex flex-col gap-4'>
          <div className='flex flex-row items-end gap-4 font-semibold'>
            <h1 className='text-6xl'>0.5 Sol</h1>
            <h1 className='text-3xl'>per month</h1>
          </div>
          <h1 className='text-2xl text-[#828282]'>Approximately 0.001 SOL (if max usage is met).</h1>
          <h1 className='text-2xl text-[#828282]'>Up to 50 credentials per month.</h1>
        </div>
        <button className={ButtonStyle}>Get Started</button>
      </div>
    </div>
  );
};

const BoxStyle: string = 'p-8 w-4/12 h-2/4 border-2 border-gray-200/70 rounded-xl  shadow-xl';
const ButtonStyle: string = 'self-end w-full py-2 text-white text-2xl font-semibold rounded-md bg-black ';

export default SubPlan;
