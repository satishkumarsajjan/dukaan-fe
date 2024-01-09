import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProductsPage {}

const Products = ({}: ProductsPage) => {
  return (
    <main className='flex items-center justify-center h-full'>
      <Link href={'/dashboard/payments'}>
        <Button>Go to payments dashboard</Button>
      </Link>
    </main>
  );
};

export default Products;
