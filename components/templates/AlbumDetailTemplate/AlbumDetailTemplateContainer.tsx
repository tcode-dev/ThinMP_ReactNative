import { useEffect } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import { useScrollY } from '@/hooks/useScrollY';
import useAlbumDetailStore from '@/store/albumDetailStore';
import useSongsStore from '@/store/songsStore';
import AlbumDetailPresenter, { TITLE_BOTTOM_POSITION } from './AlbumDetailTemplatePresenter';

const AlbumDetailContainer = () => {
  const { state: albumDetailState } = useAlbumDetailStore();
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
    if (!albumDetailState.isReady) return;

    const unsubscribe = scrollY.addListener(({ value }) => {
      if (value > titlePosition) {
        navigation.setOptions({
          headerTitle: albumDetailState.value.name,
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
  }, [albumDetailState]);

  if (!albumDetailState.isReady) return null;
  if (!songsState.isReady) return null;

  return <AlbumDetailPresenter albumDetail={albumDetailState.value} songs={songsState.value} scrollY={scrollY} size={width} titleHeight={titleHeight} />;
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F2F2F7',
    width: '100%',
    height: '100%',
  },
});

export default AlbumDetailContainer;