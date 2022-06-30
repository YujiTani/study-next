import HeadLine from '@/components/HeadLine';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadLine />
      <Header title={'about'} />
      <Main />
      <Footer />
    </div>
  );
}
