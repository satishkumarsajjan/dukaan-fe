'use client';
import { redirect } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface NavItemProps {
  logo: string;
  href: string;
  label: string;
  badge: boolean;
  beta: boolean;
}

export const NavItem = ({ href, label, logo, badge, beta }: NavItemProps) => {
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
      <p
        className={cn(
          'grow text-[#FFFFFF] opacity-80',
          active && 'opacity-100'
        )}
      >
        {label}
      </p>
      {badge && (
        <Badge className='flex justify-center w-[24px] h-[20px] rounded-[10px] bg-[#EE741F] flex-shrink-0'>
          <p className='text-center text-[13px] text-[#FFFFFF]'>3</p>
        </Badge>
      )}
      {beta && (
        <Badge className='flex flex-start rounded-[3px] pr-[6px] pl-[6px] pt-[2px] pb-[2px] bg-[#ffffff4d] text-[#FFFFFF]'>
          BETA
        </Badge>
      )}
    </Link>
  );
};
