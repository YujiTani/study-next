import styles from '@/styles/Home.module.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeadLine from '@/components/HeadLine';
import PostReducer from '@/components/PostReducer';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadLine />
      <Header title={'index'} />
      <PostReducer />
      <Footer />
    </div>
  );
}
