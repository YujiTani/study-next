import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState('');

  const pageList = [
    { path: '/', name: 'トップページ' },
    { path: '/about', name: 'サブページ' },
    { path: '/todo', name: 'ToDo' },
    { path: '/post', name: 'データ取得テスト' },
  ];

  useEffect(() => {
    const newPageList = pageList.filter((item) => {
      if (item.path === router.pathname) {
        return true;
      }
    });

    setPageTitle(newPageList[0].name);
  }, [router]);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{pageTitle}</h1>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
