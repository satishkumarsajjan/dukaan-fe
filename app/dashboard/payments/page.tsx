import { Header } from '@/components/Dashboard/Header/Header';

interface PaymentsPageProps {}

const PaymentsPage = ({}: PaymentsPageProps) => {
  return (
    <div>
      <Header help={true} screenWidth='full' searchBox={true} />
    </div>
  );
};

export default PaymentsPage;
