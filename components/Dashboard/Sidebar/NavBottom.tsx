import Image from 'next/image';
import Link from 'next/link';

interface NavBottomProps {}

export const NavBottom = ({}: NavBottomProps) => {
  return (
    <div className='flex gap-[10px] rounded-[4px] pt-[6px] pb-[6px] pr-[12px] pl-[12px] w-full  items-center bg-[#353C53]'>
      <div className='p-[6px] bg-[#ffffff1a] rounded-[4px]'>
        <Image
          src={'/wallet.svg'}
          alt='wallet'
          height={'24'}
          width={'24'}
          className='flex items-center justify-start'
        />
      </div>

      <div className='grow flex flex-col items-start justify-center'>
        <p className='text-[#FFFFFF] text-[13px] opacity-80'>
          Available credits
        </p>
        <p className='text-[#FFFFFF] text-[16px]'>222.10</p>
      </div>
    </div>
  );
};
