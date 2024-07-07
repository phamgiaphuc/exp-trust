import { IoSearchOutline } from 'react-icons/io5';

const AddressAndSearchBar = () => {
  return (
    <div className='flex bg-white   flex-row items-center  w-full justify-between rounded-xl '>
      <div className='flex flex-col w-5/12 bg-yellow-500 justify-between items-center  rounded-xl'>
        <h1 className='text-black font-inter text-[24px] font-[500] leading-normal'>Your Exp Trust Address is</h1>
        <h1 className='text-[#2400FF] font-inter text-[11px] font-[400] leading-normal '>
          0xE9eBF26D8bbdB42E66593F58380305B61813Feab
        </h1>
      </div>
      <div className=' bg-green-500 h-11 flex items-center justify-end w-5/12  text-red-500 rounded-lg border-[1px] border-[#BABABA]'>
        <IoSearchOutline className='ml-4 size-19' />
        <input
          type='text'
          placeholder='Search'
          className='w-full h-full outline-none text-black text-[13px] font-[400] pl-2 rounded-lg'
        />
      </div>
      <div></div>
    </div>
  );
};

export default AddressAndSearchBar;
