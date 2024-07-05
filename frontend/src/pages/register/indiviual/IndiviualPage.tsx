import React from 'react';
import login from '../../../assets/login.png';
import IndiviualForm from './IndiviualForm';
import exptrust from '../../../assets/exptrust.png';

const IndiviualPage = () => {
  return (
    <div className='flex flex-row w-screen bg-gradient-to-r p-4 from-[#EEFDFF] to-[#FDFDFD] h-screen'>
      <div className='w-6/12 flex justify-center'>
        <img className='h-full  ' src={login} alt='' />
      </div>
      <div className='w-6/12 flex justify-center  '>
        <IndiviualForm />
        <img src={exptrust} className='size-12 w-auto object-fit' alt='' />
      </div>
    </div>
  );
};

export default IndiviualPage;
