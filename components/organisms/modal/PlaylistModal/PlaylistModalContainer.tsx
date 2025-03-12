import { useCallback, useEffect, useState } from 'react';
import PlaylistModalPresenter from './PlaylistModalPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { PlaylistRepository } from '@/repository/PlaylistRepository';
import { usePlaylistsStore } from '@/store/playlistsStore';
import { usePlaylistModalStore } from '@/store/playlistModalStore';

type Props = { id: string };

const PlaylistModalContainer: React.FC<Props> = ({ id }) => {
  const color = useThemeColor();
  const { closePlaylistModal } = usePlaylistModalStore();
  const [isCreate, setIsCreate] = useState(false);
  const [name, setName] = useState('');
  const playlistRepository = new PlaylistRepository();
  const onChangeText = useCallback((text: string) => {
    setName(text);
  }, []);
  const add = useCallback(
    (playlistId: number) => {
      playlistRepository.addPlaylistSong(playlistId, id);
      closePlaylistModal();
    },
    [id, closePlaylistModal],
  );
  const cancelAdd = useCallback(() => {
    closePlaylistModal();
  }, [closePlaylistModal]);
  const cancelCreate = useCallback(() => {
    if (isCreate) {
      setIsCreate(false);
    } else {
      closePlaylistModal();
    }
  }, [isCreate, closePlaylistModal]);
  const create = useCallback(() => {
    playlistRepository.createPlaylist(name, id);
    closePlaylistModal();
  }, [id, name, closePlaylistModal]);
  const toCreate = useCallback(() => {
    setIsCreate(true);
  }, []);
  const { state, loadPlaylists } = usePlaylistsStore();

  useEffect(() => {
    loadPlaylists();
  }, [loadPlaylists]);

  if (!state.isReady) return null;

  return (
    <PlaylistModalPresenter
      borderColor={color.border}
      isCreate={isCreate}
      playlists={state.value}
      add={add}
      cancelAdd={cancelAdd}
      cancelCreate={cancelCreate}
      create={create}
      onChangeText={onChangeText}
      toCreate={toCreate}
    />
  );
};

export default PlaylistModalContainer;
