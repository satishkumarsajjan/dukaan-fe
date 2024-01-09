export type Payment = {
  id: string;
  orderId: string;
  transactionFee: number;

  orderDate: string;
  orderAmount: number;
};

export const payments: Payment[] = [
  {
    id: '728ed52f',
    orderId: '#281209',
    transactionFee: 22.22,

    orderDate: '7 July, 2023',
    orderAmount: 1278.23,
  },
  {
    id: '728ed52f',
    orderId: '#281209',
    transactionFee: 22.22,

    orderDate: '7 July, 2023',
    orderAmount: 1278.23,
  },
  {
    id: '728ed52f',
    orderId: '#281209',
    transactionFee: 22.22,

    orderDate: '7 July, 2023',
    orderAmount: 1278.23,
  },
  {
    id: '728ed52f',
    orderId: '#281209',
    transactionFee: 22.22,

    orderDate: '7 July, 2023',
    orderAmount: 1278.23,
  },
];
