import Image from 'next/image';

interface OverviewProps {}

export const Overview = ({}: OverviewProps) => {
  return (
    <div className='w-full flex flex-col items-start gap-[24px] self-stretch'>
      <div className='flex flex-row items-start self-stretch justify-between'>
        <p className='text-[#1A181E] text-[20px] leading-[28px] font-medium '>
          Overview
        </p>
        <div className='flex items-center justify-center gap-[10px] w-[137px] h-[36px] flex-shrink-0 rounded-[4px] border-[1px] border-solid border-[#D9D9D9] bg-[#FFFFFF]'>
          <p className='text-[#4D4D4D] text-[16px] font-normal leading-[24px]'>
            Last Month
          </p>
          <Image
            alt='arrow'
            src={'/arrow.svg'}
            height={'16'}
            width={'16'}
            className='flex-shrink-0'
          />
        </div>
      </div>
      <div className='flex w-full items-start gap-[20px] self-stretch'>
        <div className='flex w-full justify-start items-center gap-[24px] p-[20px] rounded-[8px] bg-[#FFFFFF] shadow-lg'>
          <div className='flex flex-col items-start gap-[16px] self-stretch'>
            <div className='flex items-center gap-[8px]'>
              <p className='text-[#4D4D4D] text-[16px] font-normal leading-[24px]'>
                Online orders
              </p>
            </div>
            <div className='flex items-center gap-[16px] self-stretch'>
              <div className='flex justify-between items-center'>
                <p className='text-[#1A181E] text-[32px] font-medium leading-[38px]'>
                  231
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full justify-start items-center gap-[24px] p-[20px] rounded-[8px] bg-[#FFFFFF] shadow-lg'>
          <div className='flex flex-col items-start gap-[16px] self-stretch'>
            <div className='flex items-center gap-[8px]'>
              <p className='text-[#4D4D4D] text-[16px] font-normal leading-[24px]'>
                Amount recieved
              </p>
            </div>
            <div className='flex items-center gap-[16px] self-stretch'>
              <div className='flex justify-between items-center'>
                <p className='text-[#1A181E] text-[32px] font-medium leading-[38px]'>
                  ₹23,92,312.19
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
