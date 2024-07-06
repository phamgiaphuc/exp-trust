import avatar from '../../../assets/avatar.png'

const ProfilePage = () => {
  return (
    <div className='relative'>
      <div className='w-full bg-black h-80 relative'>
        <img src='' alt='' />
        <div className='rounded-full absolute grid grid-cols-2 gap-x-5 w-auto left-24 bottom-0 translate-y-1/2'>
          <img src={avatar} alt='' width={256} className=' col-span-1' />
          <p className='flex flex-col self-center translate-y-[50%] text-lg '>
            <a
              href='https://www.linkedin.com/in/%C4%91%C3%A0o-h%E1%BB%AFu-ho%C3%A0i-5096592b6/'
              className='font-bold'
              target='_blank'
            >
              Le Thanh Danh
            </a>
            <span className='opacity-70'>Front-end developer</span>
            <span className='text-red-800'>8 years of experience</span>
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 my-40'>
        <div className=' col-span-1 border-r-2'>
          <div className='text-center font-bold text-3xl'>Careers</div>
        </div>
        <div className=' col-span-1 border-l-2'>
          <div className=' text-center font-bold text-3xl'>Certificate</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
