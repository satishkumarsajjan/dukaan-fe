'use client';

import { Button } from '@/components/ui/button';
import { Payment } from '@/lib/payments';
import { ColumnDef } from '@tanstack/react-table';
import { ChevronDown, InfoIcon } from 'lucide-react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'orderId',
    header: 'Order ID',
  },
  {
    accessorKey: 'orderDate',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='p-0'
        >
          Order date
          <ChevronDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'orderAmount',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='p-0'
        >
          Order amount
          <ChevronDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'transactionFee',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='p-0'
        >
          Transaction fees
          <InfoIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
];
