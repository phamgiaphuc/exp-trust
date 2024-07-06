import AddressandSearchBar from './AddressAndSearchBar';
import Career from './UserDashboard/Career';
import Certi from './UserDashboard/Certi';

const UserDashboard = () => {
  const user: string = 'lttdanh';
  return (
    <div className='bg-blue-200 h-screen p-4 flex flex-col gap-4'>
      <div className='bg-white flex justify-between rounded-[10px]'>
        <AddressandSearchBar />
      </div>
      <div className='h-full'>
        <div id='header' className='p-2 text-4xl text-[#858585] border-[#858585] border-b-2'>
          {user}/dashboard
        </div>
        <div className='flex flex-row p-4 '>
          <div className='w-6/12'>
            <Career />
          </div>
          <div className='w-6/12'>
            <Certi />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
