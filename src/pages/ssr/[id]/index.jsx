import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeadLine from '@/components/HeadLine';
import useSWR, { SWRConfig } from 'swr';

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(API_URL);
  const userJson = await user.json();

  return {
    props: {
      fallBack: {
        [API_URL]: userJson,
      },
    },
  };
};

const UserIdSsr = (props) => {
  const { fallBack } = props;
  return (
    <>
      <HeadLine />
      <Header title={'index'} />
      <SWRConfig value={{ fallBack }}>
        <div style={{ textAlign: 'center' }}>
          <h1>{router.query.id}</h1>
          <p>リンクページ</p>
        </div>
      </SWRConfig>
      <Footer />
    </>
  );
};
