import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';

export const useNavigate = (path: string, id: string) => {
  const href = `${path}${id}` as Href;
  const router = useRouter();
  const navigate = useCallback(() => {
    router.push(href);
  }, [href, router]);

  return { href, navigate };
};