import { usePostRepository } from '@/api/repositories/usePostRepository';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeadLine from '@/components/HeadLine';
import { useRouter } from 'next/router';

export default function PostId() {
  const router = useRouter();
  const {
    data: post,
    isLoading,
    isError,
    isEmpty,
  } = usePostRepository(
    router.query?.id ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}` : null
  );

  if (isLoading) {
    return <h2 style={{ textAlign: 'center' }}>データ取得中...</h2>;
  }

  if (isError) {
    return <h2 style={{ textAlign: 'center' }}>エラーが発生しました。</h2>;
  }

  if (isEmpty) {
    return <h2 style={{ textAlign: 'center' }}>データがありません。</h2>;
  }

  return (
    <>
      <HeadLine />
      <Header title={'index'} />
      <div style={{ textAlign: 'left', paddingLeft: '30px' }}>
        <h3>{`ユーザーID : ${post.userId}  ポストID : ${post.id}`}</h3>
        <h3>{`タイトル : ${post.title}`}</h3>
        <p>{`内容 : ${post.body}`}</p>
      </div>
      <Footer />
    </>
  );
}
