import { cn } from '@/lib/utils';
import { Helper } from './Helper';
import { SearchBox } from './SearchBox';
import { Additional } from './Additional';

interface HeaderProps {
  backArrow?: boolean;
  help: boolean;
  searchBox: boolean;
  description?: boolean;
  button?: boolean;
  screenWidth: string;
  beta?: boolean;
}

export const Header = ({ help, searchBox, screenWidth }: HeaderProps) => {
  return (
    <div
      className={cn(
        'flex justify-between w-full pt-[12px] pb-[12px] pl-[32px] pr-[32px] flex-row gap-[16px] bg-[#FFFFFF] border-b-[1px] border-solid border-[#D9D9D9]'
      )}
    >
      <Helper help />
      {searchBox && <SearchBox />}
      <Additional />
    </div>
  );
};
