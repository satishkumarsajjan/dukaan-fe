import { Payment, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ];
}
interface TransactionsProps {}

export const Transactions = async ({}: TransactionsProps) => {
  const data = await getData();
  return (
    <div className='flex flex-col items-start gap-[20px] w-full'>
      <p className='text-[#1A181E] text-[20px] font-medium leading-[28px]'>
        Transactions | This Month
      </p>
      <div className='flex pt-[12px] pr-[12px] pb-[24px] pl-[24px] rounded-[8px] bg-[#FFFFFF] shadow-lg w-full'>
        <div className='container mx-auto py-10'>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};
