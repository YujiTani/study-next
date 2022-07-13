import useSWR from 'swr';

export const useUserRepository = (url) => {
  const { data, error } = useSWR(url);

  return {
    data,
    isLoading: data === undefined && !error?.status,
    isError: error,
    isEmpty: data && data?.length === 0,
  };
};
