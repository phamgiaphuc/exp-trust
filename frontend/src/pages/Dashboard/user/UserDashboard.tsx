import AddressandSearchBar from './AddressAndSearchBar';
import Career from './UserDashboard/Career';
import Certi from './UserDashboard/Certi';

const UserDashboard = () => {
  const user: string = 'lttdanh';
  return (
    <div className='bg-blue-200 h-screen p-4 flex flex-col gap-4 overflow-hidden'>
      <div className='bg-white flex justify-between rounded-[10px]'>
        <AddressandSearchBar />
      </div>
      <div className='h-full'>
        <div className='bg-white rounded-xl h-full'>
          <div id='header' className='p-2 text-4xl bg-white rounded-t-lg text-[#858585] border-[#858585] border-b-2'>
            {user}/dashboard
          </div>
          <div className='flex flex-row p-4 bg-white rounded-b-lg h-4/5 '>
            <div className='w-6/12 overflow-y-auto'>
              <Career />
            </div>
            <div className='w-6/12 overflow-y-auto'>
              <Certi />
            </div>
          </div>
          <div className=' flex justify-center h-16'>
            <button className='bg-[#0029FF] rounded-xl w-3/12 text-white text-2xl font-bold'>Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
