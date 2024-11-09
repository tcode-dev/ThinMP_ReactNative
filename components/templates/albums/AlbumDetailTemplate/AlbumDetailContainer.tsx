import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import { useScrollY } from '@/hooks/useScrollY';
import useAlbumDetailStore from '@/store/albumDetailStore';
import useSongsStore from '@/store/songsStore';
import AlbumDetailPresenter from './AlbumDetailPresenter';

const AlbumDetailContainer = () => {
  const { state: albumDetailState } = useAlbumDetailStore();
  const { state: songsState } = useSongsStore();
  const headerHeight = useHeaderHeight();
  const scrollY = useScrollY();
  const navigation = useNavigation();
  const width = Dimensions.get('window').width;

  useEffect(() => {
    if (albumDetailState.isLoading) return;
    if (!albumDetailState.isSuccess) return;
    navigation.setOptions({ title: albumDetailState.value.name });
  }, [albumDetailState]);

  useEffect(() => {
    const unsubscribe = scrollY.addListener(({ value }) => {
      if (value > width - headerHeight) {
        navigation.setOptions({ headerShown: true });
      } else {
        navigation.setOptions({ headerShown: false });
      }
    });

    return () => {
      scrollY.removeListener(unsubscribe);
    };
  }, [scrollY, headerHeight, navigation]);

  if (albumDetailState.isLoading) return null;
  if (!albumDetailState.isSuccess) return null;
  if (songsState.isLoading) return null;
  if (!songsState.isSuccess) return null;

  return (
    <AlbumDetailPresenter
      albumDetail={albumDetailState.value}
      songs={songsState.value}
      scrollY={scrollY}
      width={width}
    />
  );
}

export default AlbumDetailContainer;
