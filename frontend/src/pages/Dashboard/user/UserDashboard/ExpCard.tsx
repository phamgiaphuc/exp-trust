import React from 'react';
import logo from '../../../../assets/logo.png';

interface ExpCard {
  verify: string;
  title: string;
  exp: string;
  provider: string;
  date: string;
}

const ExpCard = (props: ExpCard) => {
  return (
    <div className=' w-full flex flex-row '>
      <img src={logo} className='size-40 p-2 w-auto'></img>
      <div className='p-2 text-xl'>
        <h1 className='text-3xl'>{props.title}</h1>
        <div className='text-2xl'>
          {props.verify === 'rejected' ? (
            <h1 className='text-red-500'>{props.exp}</h1>
          ) : props.verify === 'pending' ? (
            <h1 className='text-yellow-500'>{props.exp}</h1>
          ) : (
            <h1 className='text-green-500'>{props.exp}</h1>
          )}
        </div>
        <h1>provided by {props.provider}</h1>
        <h1>Block Address Transaction Signature View</h1>
        <h1>Date: {props.date}</h1>
      </div>
      <div className='flex  justify-center items-center w-3/12'>
        {props.verify === 'rejected' ? (
          <h1 className='text-red-500 border-red-500 border-2 px-4  text-3xl rounded-xl'>{props.verify}</h1>
        ) : props.verify === 'pending' ? (
          <h1 className='text-yellow-500  border-yellow-500 border-2 px-4 text-3xl rounded-xl'>{props.verify}</h1>
        ) : (
          <h1 className='text-green-500  border-green-500 border-2 px-4 text-3xl rounded-xl'>{props.verify}</h1>
        )}
      </div>
    </div>
  );
};
// quang dep trai
export default ExpCard;
