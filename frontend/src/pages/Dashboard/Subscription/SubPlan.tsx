const SubPlan = () => {
  return (
    <div className='flex flex-rows gap-24 w-8/12 h-3/4 items-center justify-center'>
      <div className='w-1/3 p-6 h-80 rounded-xl flex flex-col border border-gray-400 shadow-2xl'>
        <h1 className='text-2xl font-medium'>Free Plan</h1>
        <div className='py-4 flex flex-col gap-4'>
          <div className='flex items-end gap-4 font-semibold'>
            <h1 className='text-5xl'>0 Sol</h1>
            <h1 className='text-2xl'>per month</h1>
          </div>
          <h1 className='text-lg text-[#828282] font-light'>0.021 SOL per credential</h1>
        </div>
        <button className='w-full py-2 text-white bg-black rounded-xl text-xl font-semibold mt-auto hover:scale-105 active:scale-100 transition'>
          Current Plan
        </button>
      </div>
      <div className='w-1/3 p-6 h-80 rounded-xl flex flex-col border border-gray-400 shadow-2xl'>
        <h1 className='text-2xl font-medium'>Skilled Plan</h1>
        <div className='py-4 flex flex-col gap-4'>
          <div className='flex flex-row items-end gap-4 font-semibold'>
            <h1 className='text-5xl'>0.5 Sol</h1>
            <h1 className='text-2xl'>per month</h1>
          </div>
          <h1 className='text-lg text-[#828282] font-light'>
            Approximately 0.001 SOL (if max usage is met). Up to 50 credentials per month.
          </h1>
        </div>
        <button className='w-full py-2 text-white bg-black rounded-xl text-xl font-semibold mt-auto hover:scale-105 active:scale-100 transition'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SubPlan;
