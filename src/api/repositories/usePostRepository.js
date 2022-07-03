import useSWR from 'swr';
import { fetcher } from '@/api/fetcher';

export const usePostRepository = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { data, error } = useSWR(url, fetcher(url));

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
    isEmpty: data & (data?.length === 0),
  };
};
