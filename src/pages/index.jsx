import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeadLine from '../components/HeadLine';
import Main from '../components/Main';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadLine />
      <Header title={'index'} />
      <Main />
      <Footer />
    </div>
  );
}
