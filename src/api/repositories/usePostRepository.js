import useSWR from 'swr';
import { fetcher } from '@/api/fetcher';

export const usePostRepository = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    posts: data,
    isLoading: data === undefined && !error?.status,
    isError: error,
    isEmpty: data && data?.length === 0,
  };
};
