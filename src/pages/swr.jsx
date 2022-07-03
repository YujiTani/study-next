import styles from '@/styles/Home.module.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeadLine from '@/components/HeadLine';
import Swr from '@/components/Swr';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadLine />
      <Header title={'index'} />
      <Swr />
      <Footer />
    </div>
  );
}
