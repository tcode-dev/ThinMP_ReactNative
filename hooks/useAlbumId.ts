import { useLocalSearchParams } from 'expo-router';

export const useAlbumId = () => {
  const { id }: { id: string } = useLocalSearchParams();

  return { albumId: id };
};
