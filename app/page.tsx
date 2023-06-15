import Link from 'next/link';

import { Container } from '@/components/UI/Container/Container';
import { CustomButton } from '@/components/UI/CustomButton/CustomButton';

const Home = () => {
  return (
    <Container>
      <CustomButton className="p-0 h-[50px] w-[200px]">
        <Link href={'catalog'} className="w-full h-full flex items-center justify-center">
          Start Shopping
        </Link>
      </CustomButton>
    </Container>
  );
};

export default Home;
