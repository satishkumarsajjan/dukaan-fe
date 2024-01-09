import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex items-center justify-center h-full'>
      <Link href={'/dashboard/payments'}>
        <Button>Go to payments dashboard</Button>
      </Link>
    </main>
  );
}
