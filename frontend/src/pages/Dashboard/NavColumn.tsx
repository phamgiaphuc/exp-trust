import React from 'react';
import exptrust from '../../assets/exptrust.png';
import avatar from '../../assets/avatar.png';
import { Link } from 'react-router-dom';

const NavColumn: React.FC = () => {
  return (
    <div className='bg-white flex flex-col items-center justify-start h-full w-1/6 border-[1px] border-[#BABABA]'>
      <img src={exptrust} className='object-fit w-auto size-12 mt-[12px]' alt='' />
      <div className={'flex flex-col items-center justify-center mt-[78px]'}>
        <img src={avatar} className={'size-32 object-fill w-auto'} alt='' />
        <h1 className={'text-black text-center font-inter text-[28px] font-[700] leading-normal'}>Le Thanh Danh</h1>
        <h1 className={'text-[#B0B0B0] text-center font-inter text-[18px] font-[500] leading-normal'}>Individual</h1>
      </div>
      <div className={'flex flex-col items-center justify-center mt-[38px]'}>
        <h1 className={'text-black text-center font-inter text-[24px] font-[700] leading-normal'}>Main Menu</h1>
        <Link className={navLinkStyle} to=''>
          Dashboard
        </Link>
        <Link className={navLinkStyle} to=''>
          Profile
        </Link>
        <Link className={navLinkStyle} to=''>
          LinkedIn
        </Link>
        <Link className={navLinkStyle} to=''>
          Settings
        </Link>
      </div>
      <div className='mt-[20px] w-[194px] h-[59px] bg-gradient-to-r from-[#4F4F4F] via-purple-500 to-[#2009AA] rounded-[8px] justify-center items-center flex'>
        <Link className={'text-white font-inter text-[24px] font-[600] leading-normal'} to='/dashboard/sub'>
          Subscription
        </Link>
      </div>
    </div>
  );
};

const navLinkStyle: string =
  'text-black text-center p-2  font-inter text-[20px] font-[500] leading-normal hover:bg-gray-200/70 hover:rounded-xl';

export default NavColumn;
