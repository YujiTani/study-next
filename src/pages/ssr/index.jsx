import styles from '@/styles/Home.module.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeadLine from '@/components/HeadLine';
import Ssr from '@/components/Ssr';
import { SWRConfig } from 'swr';

export async function getServerSideProps() {
  const API_URL = `https://jsonplaceholder.typicode.com/users`;
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

const SsrPage = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }} className={styles.container}>
      <HeadLine />
      <Header title={'index'} />
      <Ssr />
      <Footer />
    </SWRConfig>
  );
};

export default SsrPage;
