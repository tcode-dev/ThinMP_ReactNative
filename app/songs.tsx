import { Text, View } from 'react-native';
import { useEffect } from 'react';
import useSongsStore from '@/store/songsStore';
import SongList from '@/components/organism/common/SongList';
import usePermissioStore from '@/store/permissionStore';

const SongsPage = () => {
  const { fetchAllSongs } = useSongsStore();
  const { permission, checkPermission, requestPermission } = usePermissioStore();

  useEffect(() => {
    fetchAllSongs();
    checkPermission();
  }, []);

  useEffect(() => {
    requestPermission();
  }, [permission === false]);

  return (
    <View>
      <Text>Songs</Text>
      <Text>usePermissio : {permission ? 'ok' : 'ng'}</Text>
      <SongList />
    </View>
  );
}

export default SongsPage;
