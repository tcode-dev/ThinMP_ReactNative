import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import PlaylistModalPresenter from './PlaylistModalPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { addPlaylistSong, createPlaylist } from '@/repository/playlistRepository';
import { usePlaylistsStore } from '@/store/playlistsStore';

const PlaylistModalContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const color = useThemeColor();
  const navigation = useNavigation();
  const [isCreate, setIsCreate] = useState(false);
  const [name, setName] = useState('');
  const onChangeText = useCallback((text: string) => {
    setName(text);
  }, []);
  const add = useCallback((playlistId: number) => {
    addPlaylistSong(playlistId, id);
    navigation.goBack();
  }, [id, navigation]);
  const cancelAdd = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const cancelCreate = useCallback(() => {
    if (isCreate) {
      setIsCreate(false);
    } else {
      navigation.goBack();
    }
  }, [isCreate, navigation]);
  const create = useCallback(() => {
    createPlaylist(name, id);
    navigation.goBack();
  }, [id, name, navigation]);
  const toCreate = useCallback(() => {
    setIsCreate(true);
  }, []);
  const { state, fetchPlaylists } = usePlaylistsStore();

  useEffect(() => {
    fetchPlaylists();
  }, [fetchPlaylists]);

  if (!state.isReady) return null;

  return <PlaylistModalPresenter
    borderColor={color.border}
    isCreate={isCreate}
    playlists={state.value}
    add={add}
    cancelAdd={cancelAdd}
    cancelCreate={cancelCreate}
    create={create}
    onChangeText={onChangeText}
    toCreate={toCreate}
  />;
};

export default PlaylistModalContainer;