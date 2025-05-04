import { useLocalSearchParams } from 'expo-router';

export const usePlaylistId = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const playlistId = parseInt(id, 10);

  return { playlistId };
};
