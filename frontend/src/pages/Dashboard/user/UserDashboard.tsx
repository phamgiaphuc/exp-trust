import AddressandSearchBar from "./AddressAndSearchBar";

const UserDashboard = () => {
  return (
    <div className='bg-blue-200 h-screen p-4 flex flex-col gap-4'>
      <div className='bg-white flex justify-between rounded-[10px]'>
        <AddressandSearchBar />
      </div>
      <div className='bg-blue-400'>Dashboard</div>
    </div>
  );
};

export default UserDashboard;