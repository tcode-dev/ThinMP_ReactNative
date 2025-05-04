import { useLocalSearchParams } from 'expo-router';

export const useArtistId = () => {
  const { id }: { id: string } = useLocalSearchParams();

  return { artistId: id };
};
