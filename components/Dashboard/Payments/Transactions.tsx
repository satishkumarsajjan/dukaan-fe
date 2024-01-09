import { Payment, payments } from '@/lib/payments';
import { columns } from './columns';
import { DataTable } from './data-table';
import { ToolBar } from './ToolBar';
import { PaginationComponent } from './Pagination';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return payments;
}
interface TransactionsProps {}

export const Transactions = async ({}: TransactionsProps) => {
  const data = await getData();
  return (
    <div className='flex flex-col items-start gap-[20px] w-full'>
      <p className='text-[#1A181E] text-[20px] font-medium leading-[28px]'>
        Transactions | This Month
      </p>
      <div className='flex flex-col pt-[12px] pr-[12px] pb-[24px] pl-[24px] rounded-[8px] bg-[#FFFFFF] shadow-lg w-full gap-[12px]'>
        <ToolBar />
        <div className='overflow-scroll'>
          <DataTable columns={columns} data={data} />
        </div>
        <PaginationComponent />
      </div>
    </div>
  );
};
