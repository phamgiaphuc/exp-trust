import React from 'react';
import login from '../../assets/login.png';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className='p-4 flex  w-[100vw] h-[100vh] '>
      <div className='w-6/12 h-full '>
        <img className='h-full mx-auto' src={login} alt='' />
      </div>
      <div className='w-6/12 h-full  '>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
