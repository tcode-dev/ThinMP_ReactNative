import { useEffect } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import { useScrollY } from '@/hooks/useScrollY';
import useArtistDetailStore from '@/store/artistDetailStore';
import useAlbumsStore from '@/store/albumsStore';
import useSongsStore from '@/store/songsStore';
import ArtistDetailPresenter, { TITLE_BOTTOM_POSITION } from './ArtistDetailTemplatePresenter';

const ArtistDetailContainer = () => {
  const { state: artistDetailState } = useArtistDetailStore();
  const { state: albumsState } = useAlbumsStore();
  const { state: songsState } = useSongsStore();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();
  const scrollY = useScrollY();
  const width = Dimensions.get('window').width;
  const statusBarHeight = Constants.statusBarHeight;
  const titleHeight = headerHeight - statusBarHeight;
  const titlePosition = width - TITLE_BOTTOM_POSITION - headerHeight;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerBackground: () => null,
    });
  }, []);

  useEffect(() => {
    if (!artistDetailState.isReady) return;

    const unsubscribe = scrollY.addListener(({ value }) => {
      if (value > titlePosition) {
        navigation.setOptions({
          headerTitle: artistDetailState.value.name,
          headerBackground: () => <View style={styles.header} />,
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
  }, [artistDetailState]);

  if (!artistDetailState.isReady) return null;
  if (!albumsState.isReady) return null;
  if (!songsState.isReady) return null;

  return <ArtistDetailPresenter artistDetail={artistDetailState.value} description='description' albums={albumsState.value} songs={songsState.value} scrollY={scrollY} size={width} titleHeight={titleHeight} />;
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F2F2F7',
    width: '100%',
    height: '100%',
  },
});

export default ArtistDetailContainer;
