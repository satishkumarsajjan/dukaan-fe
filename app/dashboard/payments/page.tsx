import { Header } from '@/components/Dashboard/Header/Header';
import { Main } from '@/components/Dashboard/Payments/Main';

interface PaymentsPageProps {}

const PaymentsPage = ({}: PaymentsPageProps) => {
  return (
    <div className='bg-[#FAFAFA]'>
      <Header help={true} screenWidth='full' searchBox={true} />
      <Main />
    </div>
  );
};

export default PaymentsPage;
