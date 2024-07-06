import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='w-full px-4 min-h-[calc(100vh-60px)] flex pb-4 pt-2'>
      <div className='bg-gradient-to-br from-[#EEF0FF] to-[#F5F5F5] min-h-full border-slate-600 border rounded-2xl text-center flex flex-col justify-center items-center w-full gap-2'>
        <span className='text-4xl font-semibold'>Get Your Experiences Verified</span>
        <span className='text-4xl font-semibold'>Secure Your Credentials with Exp Trust</span>
        <span className='my-4 w-1/3 text-xl font-light'>
          Effortlessly verify and manage your credentials and work experience with our innovative, blockchain-powered
          platform.
        </span>
        <Link to={'/login'} className='bg-white border border-slate-600 rounded-xl px-6 py-2'>
          Get started
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
