import { LinkendInCard } from './LinkendInCard';
import avatar from '../../../assets/avatar.png';

const LinkedInPage = () => {
  const data = [
    {
      name: 'Nguyen Van A',
      role: 'DevOps',
      img: avatar
    },
    {
      name: 'Nguyen Van A',
      role: 'DevOps',
      img: avatar
    },
    {
      name: 'Nguyen Van A',
      role: 'DevOps',
      img: avatar
    },
    {
      name: 'Nguyen Van A',
      role: 'DevOps',
      img: avatar
    },
    {
      name: 'Nguyen Van A',
      role: 'DevOps',
      img: avatar
    },
    {
      name: 'Nguyen Van A',
      role: 'DevOps',
      img: avatar
    }
  ];

  return (
    <div className='p-10 h-screen flex gap-6 flex-col'>
      <h1 className='text-5xl font-bold'>Explore</h1>
      <div className=' h-full flex flex-wrap gap-2 justify-around'>
        {data.map((user, index) => (
          <LinkendInCard key={`${user.name}-${user.role}-${index}`} name={user.name} role={user.role} img={user.img} />
        ))}
      </div>
    </div>
  );
};

export default LinkedInPage;
