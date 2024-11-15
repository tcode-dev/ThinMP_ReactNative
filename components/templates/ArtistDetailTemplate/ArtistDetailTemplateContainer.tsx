import { useEffect, useRef } from 'react';
import { Dimensions, View, StyleSheet, Animated, Text } from 'react-native';
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
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!artistDetailState.isReady) return;

    navigation.setOptions({
      headerBackground: () => (
        <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
          <Text style={[styles.title, { height: titleHeight, lineHeight: titleHeight }]}>{artistDetailState.value.name}</Text>
        </Animated.View>
      ),
    });
  }, [artistDetailState]);

  useEffect(() => {
    if (!artistDetailState.isReady) return;

    const unsubscribe = scrollY.addListener(({ value }) => {
      if (value > titlePosition) {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }).start();
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
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ArtistDetailContainer;
