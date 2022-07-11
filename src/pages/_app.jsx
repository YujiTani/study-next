import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import useSWR, { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState('');

  const pageList = [
    { path: '/', name: 'トップページ' },
    { path: '/about', name: 'サブページ' },
    { path: '/todo', name: 'ToDo' },
    { path: '/postreducer', name: 'データ取得' },
    { path: '/swr', name: '外部パッケージを使用したデータ取得' },
  ];

  useEffect(() => {
    const newPageList = pageList.filter((item) => {
      if (item.path === router.pathname) {
        return true;
      }
    });

    if (newPageList[0]?.name === undefined) {
      setPageTitle('');
    }
    setPageTitle(newPageList[0]?.name);
  }, [router]);

  const fetcher = async (url) => {
    const res = await fetch(url);

    // もしステータスコードが 200-299 の範囲内では無い場合、
    // レスポンスをパースして投げようとします。
    if (!res.ok) {
      const error = new Error('データが取得できませんでした。');
      // エラーオブジェクトに追加情報を付与します。
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <h1 style={{ textAlign: 'center' }}>{pageTitle}</h1>
        <Component {...pageProps} />;
      </SWRConfig>
    </>
  );
}

export default MyApp;
