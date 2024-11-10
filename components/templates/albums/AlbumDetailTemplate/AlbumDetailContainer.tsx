import { useEffect } from 'react';
import { Dimensions, View, StyleSheet, StatusBar } from 'react-native';
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
  const statusBarHeight = StatusBar.currentHeight || 0;
  const titleHeight = headerHeight - statusBarHeight;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerBackground: () => null,
    });
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.addListener(({ value }) => {
      const headerTitle = !albumDetailState.isLoading && albumDetailState.isSuccess ? albumDetailState.value.name : '';

      if (value > (width - 50) - headerHeight) {
        navigation.setOptions({
          headerTitle,
          headerBackground: () => (
            <View
              style={styles.header}
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
      titleHeight={titleHeight}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F2F2F7',
    width: '100%',
    height: '100%',
  },
});

export default AlbumDetailContainer;
