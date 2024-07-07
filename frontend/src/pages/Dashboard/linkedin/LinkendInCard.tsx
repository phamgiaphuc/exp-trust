import React from 'react';

interface LinkendInCard {
  name: string;
  role: string;
  img: string;
}

export const LinkendInCard = (props: LinkendInCard) => {
  return (
    <div className='w-1/4 h-2/5  border-2 rounded-xl bg-white p-4 pt-10  gap-2 border-gray-500 flex flex-col items-center'>
      <img src={props.img} alt='' className=' object-scale-down size-24 w-auto rounded-full' />
      <h1 className='text-2xl font-bold '>{props.name}</h1>
      <h1 className='text-xl'>{props.role}</h1>
      <button className='bg-gray-500 text-white p-2 rounded-lg font-bold'>Contact</button>
    </div>
  );
};
