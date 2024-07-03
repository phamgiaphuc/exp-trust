import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
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
  );
};

export default NavBar;
