import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

interface ToolBarProps {}

export const ToolBar = ({}: ToolBarProps) => {
  return (
    <div className='flex justify-between items-center self-stretch'>
      <div className='flex w-[248px] items-start'>
        <div className='flex justify-center pl-[16px] pr-[16px] pt-[10px] pb-[10px] gap-[8px] items-center rounded-[4px] border-[1px] border-[#D9D9D9] bg-[#FFFFFF]'>
          <Image src={'/search.svg'} alt='search' width={'14'} height={'14'} />
          <Input
            placeholder='Search by order ID...'
            className='text-[#999999] text-[14px] font-normal leading-[20px] border-none'
          />
        </div>
      </div>
      <div className='flex items-center gap-[12px] justify-between'>
        <div className='flex items-center gap-[12px]'>
          <Button className='flex pt-[6px] pb-[6px] pr-[12px] pl-[12px] items-center gap-[6px] rounded-[4px] border-[1px] border-[#D9D9D9] bg-[#FFFFFF] hover:bg-[#ffffff1a]'>
            <p className='text-[16px] text-[#4D4D4D] font-normal leading-[24px]'>
              Sort
            </p>
            <Image alt='sort' src={'/Sort.svg'} width={'16'} height={'16'} />
          </Button>
        </div>
        <div className='flex items-center justify-center flex-shrink-0 rounded-[4px] border-[1px] border-[#D9D9D9] w-[36px] h-[36px]'>
          <Image
            src={'/download.svg'}
            alt='download'
            width={'20'}
            height={'20'}
          />
        </div>
      </div>
    </div>
  );
};
