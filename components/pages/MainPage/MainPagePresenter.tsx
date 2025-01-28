import React from 'react';
import { Animated } from 'react-native';
import PageLayout from '@/components/molecules/PageLayout';
import RecentlyAddedTitle from '@/components/molecules/title/RecentlyAddedTitle';
import AlbumList from '@/components/organisms/list/AlbumList';
import MainHeader from '@/components/organisms/main/MainHeader';
import MainMenu from '@/components/organisms/MainMenu';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const MainPagePresenter = () => (
  <PageLayout>
    <Animated.FlatList data={[<MainHeader key={0} />, <MainMenu key={1} />, <RecentlyAddedTitle key={2} />, <AlbumList key={3} />]} renderItem={({ item }) => <>{item}</>} />
    <MiniPlayer />
  </PageLayout>
);

export default MainPagePresenter;
