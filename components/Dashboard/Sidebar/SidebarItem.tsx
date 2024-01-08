import { Logo } from './Logo';
import { NavBottom } from './NavBottom';
import { NavPanel } from './NavPanel';

interface SidebarItemProps {}

export const SidebarItem = ({}: SidebarItemProps) => {
  return (
    <div className='flex flex-col gap-[16px] h-full'>
      <div className='flex flex-col gap-[24px] h-full'>
        <Logo />
        <NavPanel />
      </div>
      <div className='flex-none'>
        <NavBottom />
      </div>
    </div>
  );
};
