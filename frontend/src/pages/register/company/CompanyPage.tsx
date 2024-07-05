import React from 'react';
import login2 from '../../../assets/login2.png';
import exptrust from '../../../assets/exptrust.png';
import CompanyForm from './CompanyForm.tsx';

const CompanyPage: React.FC = () => {
  return (
    <div className='flex flex-row w-screen bg-gradient-to-r p-4 from-[#EEFDFF] to-[#FDFDFD] h-screen'>
      <div className='w-6/12 flex justify-start'>
        <img src={exptrust} className='size-12 w-auto object-fit ml-[25px]' alt='' />
        <CompanyForm />
      </div>
      <div className='w-6/12 flex justify-center'>
        <img className='h-full  ' src={login2} alt='' />
      </div>
    </div>
  );
};

export default CompanyPage;
