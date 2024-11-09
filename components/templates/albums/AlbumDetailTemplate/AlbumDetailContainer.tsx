import { useEffect } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import { useScrollY } from '@/hooks/useScrollY';
import useAlbumDetailStore from '@/store/albumDetailStore';
import useSongsStore from '@/store/songsStore';
import AlbumDetailPresenter from './AlbumDetailPresenter';
import { BlurView } from 'expo-blur';

const AlbumDetailContainer = () => {
  const { state: albumDetailState } = useAlbumDetailStore();
  const { state: songsState } = useSongsStore();
  const headerHeight = useHeaderHeight();
  const scrollY = useScrollY();
  const navigation = useNavigation();
  const width = Dimensions.get('window').width;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerBackground: () => null,
    });
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.addListener(({ value }) => {
      const headerTitle = !albumDetailState.isLoading && albumDetailState.isSuccess ? albumDetailState.value.name : '';

      if (value > width - headerHeight) {
        navigation.setOptions({
          headerTitle,
          headerBackground: () => (
            <BlurView
              tint="dark"
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          ),
        });
      } else {
        navigation.setOptions({
          headerTitle: '',
          headerBackground: () => null,
        });
      }
    });

    return () => {
      scrollY.removeListener(unsubscribe);
    };
  }, [albumDetailState]);

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

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#aaaaaa',
  },
});

export default AlbumDetailContainer;
