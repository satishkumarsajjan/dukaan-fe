import Image from 'next/image';

interface HelperProps {
  help: boolean;
}

export const Helper = ({ help }: HelperProps) => {
  return (
    <div className='flex justify-center gap-[16px]'>
      <p className='text-[#1A181E] text-[15px] leading-[22px] flex items-center justify-center'>
        Payments
      </p>
      {help && (
        <div className='flex justify-center items-center gap-[6px]'>
          <Image alt='' src={'/Help.svg'} width={'14'} height={'14'} />
          <p className='text-[#4D4D4D] text-[12px] leading-[16px]'>
            How it works?
          </p>
        </div>
      )}
    </div>
  );
};
