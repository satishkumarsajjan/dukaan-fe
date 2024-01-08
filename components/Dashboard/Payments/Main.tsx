import { Overview } from './Overview';
import { Transactions } from './Transactions';

interface MainProps {}

export const Main = ({}: MainProps) => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex w-full flex-col items-center justify-center gap-[32px] self-stretch ml-[32px] mr-[32px] mt-[32px] mb-[32px]'>
        <Overview />
        <Transactions />
      </div>
    </div>
  );
};
