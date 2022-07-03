import classes from './Swr.module.css';
import repository from '@/api';

export default function Swr() {
  const { posts, isLoading, isError, isEmpty } = repository.posts();

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
          <ol key={post.id} className={classes.postWrapper}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </ol>
        );
      })}
    </ul>
  );
}
