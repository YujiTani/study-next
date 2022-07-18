import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeadLine from '@/components/HeadLine';
import { User as UserComponent } from '@/components/User';
import { SWRConfig } from 'swr';

export async function getServerSideProps(context) {
  const { id } = await context.query;
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const res = await fetch(API_URL);
  const data = await res.json();

  return {
    props: {
      fallback: {
        [API_URL]: data,
      },
    },
  };
}

const UsersId = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <HeadLine />
      <Header title={'index'} />
      <UserComponent />
      <Footer />
    </SWRConfig>
  );
};

export default UsersId;
