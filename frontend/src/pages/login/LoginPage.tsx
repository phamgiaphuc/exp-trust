import React from 'react';
import login from '../../assets/login.png';
import LoginForm from './LoginForm';
import exptrust from '../../assets/exptrust.png';

const LoginPage = () => {
  return (
    <div className='p-4 flex bg-gradient-to-r p-4 from-[#EEFDFF] to-[#FDFDFD] w-[100vw] h-[100vh] '>
      <div className='w-6/12 h-full '>
        <img className='h-full mx-auto' src={login} alt='' />
      </div>
      <div className='w-6/12 h-full flex '>
        <LoginForm />
        <img src={exptrust} className=' object-fit w-auto   size-12 ' alt='' />
      </div>
    </div>
  );
};

export default LoginPage;
