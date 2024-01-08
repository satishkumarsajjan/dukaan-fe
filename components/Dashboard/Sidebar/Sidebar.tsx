'use client';

import { Logo } from './Logo';
import { NavPanel } from './NavPanel';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  return (
    <div className='w-full h-full flex flex-col bg-[#1E2640] pt-[16px] pb-[16px] pl-[10px] pr-[10px]'>
      <SidebarItem />
    </div>
  );
};
