import React from 'react';
import { Link } from 'react-router-dom';

const CompanyForm: React.FC = () => {
  return (
    <div className='h-full flex flex-col justify-center gap-4 w-full'>
      <h1 className='text-5xl pb-4 font-bold'>Get Started</h1>
      <div>
        <h1 className='text-3xl '>Please enter the detail below</h1>
        <h1 className='text-3xl '>
          or sign in{' '}
          {
            <Link className='text-blue-600' to={'/login'}>
              here
            </Link>
          }
        </h1>
      </div>
      <form className='flex pt-4 gap-5 flex-col'>
        <div className='flex pt-4 gap-5 flex-row'>
          <input className={inputStyle} type='text' name='company-name' placeholder='Company Name' id='' />
          <input className={inputStyle} type='text' name='representative' placeholder='Representative' id='' />
        </div>
        <div className='flex pt-4 gap-5 flex-row'>
          <input className={inputStyle} type='email' name='business-email' placeholder='Business Email' id='' />
          <input className={inputStyle} type='text' name='industry' placeholder='Industry' id='' />
        </div>
        <div className='flex pt-4 gap-5 flex-row'>
          <input className={inputStyle} type='text' name='company-size' placeholder='Company Size' id='' />
          <input className={inputStyle} type='text' name='role' placeholder='Role' id='' />
        </div>
        <div className='flex pt-4 gap-5 flex-row'>
          <input className={inputStyle} type='password' name='password' placeholder='Password' id='' />
          <input className={inputStyle} type='password' name='confirm-password' placeholder='Confirm Password' id='' />
        </div>
        <button className=' bg-[#702CFF] text-white text-2xl h-16 rounded-lg font-semibold' type='submit'>
          Sign Up
        </button>
        <Link
          to={'/signup/individual'}
          className=' bg-gray-400 text-white text-2xl h-16 rounded-lg font-semibold flex justify-center items-center '
          type='submit'
        >
          You’re an Individual ?
        </Link>
      </form>
    </div>
  );
};

export default CompanyForm;

const inputStyle: string = 'border-2 outline-none h-16 text-lg p-2 rounded-lg w-1/2';
