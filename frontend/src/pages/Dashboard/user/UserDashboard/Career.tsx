import ExpCard from './ExpCard';
import expCards from '../../../../../../backend/src/database/expDatabase'
const Career = () => {
  console.log(expCards);
  return (
    <div className='flex flex-col gap-2 items-center'>
      <h1 className='font-bold text-3xl '>Career</h1>
      <div className='h-4'>
        {expCards.map((expCard: any, index: number): any => {
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
