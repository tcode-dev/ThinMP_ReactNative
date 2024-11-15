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
  const headerHeight = useHeaderHeight();
  const scrollY = useScrollY();
  const width = Dimensions.get('window').width;
  const statusBarHeight = Constants.statusBarHeight;
  const titleHeight = headerHeight - statusBarHeight;

  if (!artistDetailState.isReady) return null;
  if (!albumsState.isReady) return null;
  if (!songsState.isReady) return null;

  return <ArtistDetailPresenter artistDetail={artistDetailState.value} description='description' albums={albumsState.value} songs={songsState.value} scrollY={scrollY} size={width} titleHeight={titleHeight} />;
};



export default ArtistDetailContainer;
