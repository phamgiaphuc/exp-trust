import { useEffect, useState } from 'react';
import ExpCard from './ExpCard';
const Career = () => {
  const [expData, setExpData] = useState([])
  useEffect(() => {
    try {
      fetch('http://localhost:8000/api/v1/certi', {
        method: 'GET'
      })
        .then((res) => res.json())
        .then((res: any) => {
          setExpData(res);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className='flex flex-col gap-2 items-center'>
      <h1 className='font-bold text-3xl '>Career</h1>
      <div className='h-4'>
        {expData.map((expCard: any, index: number): any => {
          return (
            <ExpCard
              verify={expCard.verify}
              title={expCard.title}
              exp={`${expCard.exp}` + ' year of experience'}
              provider={expCard.provider}
              date={expCard.date}
              key={index}
            ></ExpCard>
          );
        })}
      </div>
    </div>
  );
};

export default Career;
