'use client';

import { Payment } from '@/lib/payments';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'orderId',
    header: 'Order ID',
  },
  {
    accessorKey: 'orderDate',
    header: 'Order date',
  },
  {
    accessorKey: 'orderAmount',
    header: 'Order amount',
  },
  {
    accessorKey: 'transactionFee',
    header: 'Transaction fees',
  },
];
