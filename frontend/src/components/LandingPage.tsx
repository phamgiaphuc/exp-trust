import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-between'>
      <header className='w-screen h-[91px]'>
        <div className='flex items-center justify-between w-screen mx-auto px-4 h-full'>
          <div>
            <img className='w-[96px] h-[88px] ml-[20px]' src={logo} alt='' />
          </div>
          <div className='border-solid border-2 border-[#CECECE] flex items-center justify-between w-[433px] h-[44px] rounded-[21px] bg-gradient-to-br from-[#EEE] to-[#FDFBFB] shadow-[0_4px_4px_-15px_rgba(0,0,0,0.25)]'>
            <Link
              to='#'
              className='text-black text-[20px] font-inter not-italic font-[500] text-center leading-normal ml-[37px]'
            >
              Home
            </Link>
            <Link to='#' className='text-black text-[20px] font-inter not-italic font-[500] text-center leading-normal'>
              About us
            </Link>
            <Link
              to='#'
              className='text-black text-[20px] font-inter not-italic font-[500] text-center leading-normal mr-[37px]'
            >
              Features
            </Link>
          </div>
          <div>
            <Link
              to='/login'
              className='text-black text-[20px] font-inter not-italic font-[500] text-center leading-normal mr-[28px]'
            >
              Login
            </Link>
            <Link
              to='/signup/individual'
              className='text-black text-[20px] font-inter not-italic font-[500] text-center leading-normal mr-[20px]'
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>
      <div className='w-[calc(100%-60px)] ml-[20px] mr-[20px] h-[calc(100vh-91px-24px)] rounded-[16px] bg-gradient-to-br from-[#EEF0FF] to-[#F5F5F5] flex-col flex items-center justify-center'>
        <div className='w-[1233] h-[153] flex-col flex items-center justify-center'>
          <h1 className='text-black text-[48px] font-inter not-italic font-[600] text-center leading-normal'>
            {' '}
            Get Your Experiences Verified,
          </h1>
          <h1 className='text-black text-[48px] font-inter not-italic font-[600] text-center leading-normal'>
            Secure Your Credentials with Exp Trust
          </h1>
        </div>
        <div className='w-[123] h-[71] flex-col flex items-center justify-center mt-[37px]'>
          <h1 className='text-[#525252] text-[24px] font-inter not-italic font-[400] text-center leading-normal'>
            Effortlessly verify and manage your credentials and work experience with our{' '}
          </h1>
          <h1 className='text-[#525252] text-[24px] font-inter not-italic font-[400] text-center leading-normal'>
            innovative, blockchain-powered platform.
          </h1>
        </div>
        <button className='w-[151px] h-[44px] rounded-[18px] border-solid border-[1px] border-[#D7D7D7] bg-gradient-to-br from-[#FDFDFD] to-[#F1F1F1] mt-[37px] text-black text-[20px] font-inter not-italic font-[500] text-center leading-normal'>
          Get Started
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
