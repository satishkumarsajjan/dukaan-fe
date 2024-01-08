import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {}

export const Logo = ({}: LogoProps) => {
  return (
    <div className='flex gap-[12px] w-full  items-center'>
      <Image
        src={'/Nishyan.png'}
        alt='logo'
        height={'39'}
        width={'39'}
        className='flex items-center justify-center rounded-[4px]'
      />

      <div className='grow flex flex-col items-start justify-center'>
        <p className='text-[#FFFFFF] text-[15px]'>Nishyan</p>
        <Link
          href={'/'}
          className='text-[#FFFFFF] text-[13px] underline opacity-[0.8] '
        >
          Visit store
        </Link>
      </div>
      <div className=''>
        <Image src={'/ChevronDown.svg'} alt='down' width={'20'} height={'20'} />
      </div>
    </div>
  );
};
