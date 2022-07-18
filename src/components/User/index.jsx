import { useUserRepository } from '@/api/repositories/useUserRepository';
import { useRouter } from 'next/router';

export function User() {
  const router = useRouter();
  const { data, isLoading, isError, isEmpty } = useUserRepository(
    router.query.id ? `https://jsonplaceholder.typicode.com/users/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (isEmpty) {
    return <div>データがありません。</div>;
  }

  if (isError) {
    return <div>エラーが発生しました。</div>;
  }

  return (
    <ul>
      <div>
        <h1>
          <strong>名前：</strong>
          {data.name}
        </h1>
        <h2>
          <strong>勤務先：</strong>
          {data.company.name}
        </h2>
        <p>
          <strong>ID：</strong>
          {data.id}
        </p>
        <p>
          <strong>メールアドレス：</strong>
          {data.email}
        </p>
        <p>
          <strong>TEL：</strong>
          {data.phone}
        </p>
        <p>
          <strong>住所：</strong>
          {data.address.city}
          {data.address.street}
          {data.address.suite}
        </p>
      </div>
    </ul>
  );
}
