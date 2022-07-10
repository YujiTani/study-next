import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeadLine from '@/components/HeadLine';
import { useRouter } from 'next/router';

export default function PostId() {
  const router = useRouter();

  return (
    <>
      <HeadLine />
      <Header title={'index'} />
      <div style={{ textAlign: 'center' }}>
        <h1>{router.query.id}</h1>
        <p>リンクページ</p>
      </div>
      <Footer />
    </>
  );
}
