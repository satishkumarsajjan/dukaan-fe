import { Sidebar } from '@/components/Dashboard/Sidebar/Sidebar';

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className='flex h-full w-full'>
      <div className='flex-none w-[224px] h-full'>
        <Sidebar />
      </div>
      <div className='w-full h-full'>{children}</div>
    </div>
  );
};

export default layout;
