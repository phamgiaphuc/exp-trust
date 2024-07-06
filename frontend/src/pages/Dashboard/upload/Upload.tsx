import AddressAndSearchBar from '../user/AddressAndSearchBar';
import Dropzone from 'react-dropzone';

const Upload = () => {
  const user: string = 'lttdanh';
  const inputStyle: string = 'border-2 outline-none h-16 text-xl mt-5 rounded-lg p-4';
  const inputStyle2: string = 'border-2 outline-none h-16 text-xl mt-5 rounded-lg p-4 w-[48%]';

  return (
    <div className='p-4 bg-gray-200/70 flex h-full w-full flex-col gap-4'>
      <div className='bg-white flex justify-between  rounded-xl'>
        <AddressAndSearchBar />
      </div>
      <div className='h-full bg-white rounded-t-xl rounded-b-xl'>
        <div id='header' className='p-2 text-4xl bg-white rounded-t-lg text-[#858585] border-[#858585] border-b-2'>
          {user}/Dashboard/Upload
        </div>
        <div className=' h-full '>
          <form className='flex justify-center items-center flex-col gap-2 p-10'>
            <div className=' flex flex-col w-6/12 '>
              <input className={inputStyle} type='text' placeholder='Company Name' />
              <input className={inputStyle} type='text' placeholder='Representative' />
              <input className={inputStyle} type='email' placeholder='Bussiness email of the company' />
              <input className={inputStyle} type='text' placeholder='Role' />
              <div className='flex justify-between flex-row h-full '>
                <input className={inputStyle2} type='text' placeholder='Start date' />
                <input className={inputStyle2} type='text' placeholder='Present/End date' />
              </div>
              <div className='border-2 rounded-xl border-dashed mt-10  w-full h-28 flex items-center justify-center bg-[#F1F1F1] text-[#A9A9A9]'>
                <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div className='' {...getRootProps()}>
                        <input {...getInputProps()} />
                        <center>Drag 'n' drop some files here, or click to select files</center>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
              <div className=' flex justify-center h-16 mt-10'>
                <button className='bg-[#0029FF] rounded-xl w-3/12 text-white text-2xl font-bold '>Proceed</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
