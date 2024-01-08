import Image from 'next/image';

interface AdditionalProps {}

export const Additional = ({}: AdditionalProps) => {
  return (
    <div className='flex justify-end items-center gap-[8px]'>
      <div className='flex items-center justify-center gap-[12px]'>
        <div className='relative h-[40px] w-[40px] flex items-center justify-center bg-[#E6E6E6] rounded-full'>
          <Image
            alt='message'
            src={'/Messages.svg'}
            width={'20'}
            height={'20'}
            className='bg-transparent'
          />
        </div>
        <Image alt='dropdown' src={'/Menu.svg'} height={'40'} width={'40'} />
      </div>
    </div>
  );
};
