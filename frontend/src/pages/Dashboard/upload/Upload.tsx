import AddressAndSearchBar from '../user/AddressAndSearchBar';
import Dropzone from 'react-dropzone';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const nav = useNavigate();
  const [staffRequest, setStaffRequest] = useState({
    cate:'',
    companyName: '',
    representative: '',
    compEmail: '',
    role: '',
    startDate: '',
    endDate: ''
  });
  const user: string = 'lttdanh';
  const inputStyle: string = 'border-2 outline-none h-16 text-xl mt-5 rounded-lg p-4';
  const inputStyle2: string = 'border-2 outline-none h-16 text-xl mt-5 rounded-lg p-4 w-[48%]';

  const changeSubmit = ({ target: { name, value } }: any) => {
    setStaffRequest((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      fetch('http://localhost:8000/user/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(staffRequest)
      })
        .then((res) => res.json())
        .then((res: any) => {
          if(res) {
            nav('/dashboard');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='p-4 bg-gray-200/70 flex h-full w-full flex-col gap-4'>
      <div className='bg-white flex justify-between rounded-xl'>
        <AddressAndSearchBar />
      </div>
      <div className='h-full bg-white rounded-t-xl rounded-b-xl'>
        <div id='header' className='p-2 text-4xl bg-white rounded-t-lg text-[#858585] border-[#858585] border-b-2'>
          {user}/Dashboard/Upload
        </div>
        <div className=' h-full '>
          <form className='flex justify-center items-center flex-col gap-2 p-10' onSubmit={(e) => handleSubmit(e)}>
            <div className=' flex flex-col w-6/12 '>
              <input
                className={inputStyle}
                type='text'
                onChange={(e) => changeSubmit(e)}
                name='companyName'
                placeholder='Company Name'
              />
              <input
                className={inputStyle}
                type='text'
                onChange={(e) => changeSubmit(e)}
                name='representative'
                placeholder='Representative'
              />
              <input
                className={inputStyle}
                type='email'
                onChange={(e) => changeSubmit(e)}
                name='compEmail'
                placeholder='Bussiness email of the company'
              />
              <div className=' flex justify-between items-center flex-row h-full '>
                <input
                  className={inputStyle2}
                  type='text'
                  onChange={(e) => changeSubmit(e)}
                  name='role'
                  placeholder='Role'
                />
                <select className='h-16 mt-5 border-2 px-4 rounded-lg w-[48%]'>
                  <option value='career'>Career</option>
                  <option value='certification'>Certification</option>
                </select>
              </div>
              <div className='flex justify-between flex-row h-full '>
                <input
                  className={inputStyle2}
                  type='date'
                  onChange={(e) => changeSubmit(e)}
                  name='startDate'
                  placeholder='Start date'
                />
                <input
                  className={inputStyle2}
                  type='date'
                  onChange={(e) => changeSubmit(e)}
                  name='endDate'
                  placeholder='Present/End date'
                />
              </div>
              <div className='border-2 rounded-xl border-dashed mt-10  w-full h-28 flex items-center justify-center bg-[#F1F1F1] text-[#A9A9A9]'>
                <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div className='' {...getRootProps()}>
                        <input {...getInputProps()} onChange={(e) => changeSubmit(e)} />
                        <center>Drag 'n' drop some files here, or click to select files</center>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
              <div className=' flex justify-center h-16 mt-10'>
                <button className='bg-[#0029FF] rounded-xl w-3/12 text-white text-2xl font-bold ' type='submit'>
                  Proceed
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
