import classes from './Swr.module.css';
import repository from '@/api';
import Link from 'next/link';

export default function Swr() {
  const { posts, isLoading, isError, isEmpty } = repository.posts("https://jsonplaceholder.typicode.com/posts");

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
    <ul>
      {posts.map((post) => {
        return (
          <Link key={post.id} href={`/swr/${post.id}`}>
          <a>
          <ol className={classes.postWrapper}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </ol>
          </a>
          </Link>
        );
      })}
    </ul>
  );
}
