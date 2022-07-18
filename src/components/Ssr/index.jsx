import classes from './Ssr.module.css';
import Link from 'next/link';
import repository from '@/api';

const Ssr = () => {
  const { data, isLoading, isError, isEmpty } = repository.users(
    'https://jsonplaceholder.typicode.com/users'
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
    <ul>
      {data?.map((user) => {
        return (
          <Link rel='preload' key={user.id} href={`/ssr/${user.id}`}>
            <a>
              <ol className={classes.postWrapper}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </ol>
            </a>
          </Link>
        );
      })}
    </ul>
  );
};

export default Ssr;
