'use client';
import { redirect } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface NavItemProps {
  logo: string;
  href: string;
  label: string;
}

export const NavItem = ({ href, label, logo }: NavItemProps) => {
  const router = usePathname();
  const url = `/dashboard/${href}`;
  const active = router === url ? true : false;
  return (
    <Link
      href={url}
      className={cn(
        'flex items-center justify-start w-full pl-[16px] pr-[16px] pt-[8px] pb-[8px] gap-[12px] rounded-[4px] ',
        active && 'bg-[#ffffff1a]'
      )}
    >
      <Image
        src={logo}
        alt={label}
        width={'20'}
        height={'20'}
        className={cn('text-[#FFFFFF] opacity-80', active && 'opacity-100')}
      />
      <p className={cn('text-[#FFFFFF] opacity-80', active && 'opacity-100')}>
        {label}
      </p>
    </Link>
  );
};
