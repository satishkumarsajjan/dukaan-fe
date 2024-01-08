import { Input } from '@/components/ui/input';
import Image from 'next/image';

interface SearchBoxProps {}

export const SearchBox = ({}: SearchBoxProps) => {
  return (
    <div className='flex w-[400px] pt-[9px] pb-[9px] pl-[16px] pr-[16px] items-center justify-stretch flex-shrink-0 gap-[8px] rounded-[6px] bg-[#F2F2F2]'>
      <Image
        alt='search'
        src={'/search.svg'}
        width={'16'}
        height={'16'}
        className='flex-shrink-0'
      />
      <Input
        placeholder='Search features, tutorials, etc.'
        className='bg-transparent border-none'
      />
    </div>
  );
};
