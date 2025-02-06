import React from 'react';
import { Animated } from 'react-native';
import PageLayout from '@/components/molecules/PageLayout';
import RecentlyAddedTitle from '@/components/molecules/title/RecentlyAddedTitle';
import ShortcutTitle from '@/components/molecules/title/ShortcutTitle';
import AlbumList from '@/components/organisms/list/AlbumList';
import ShortcutList from '@/components/organisms/list/ShortcutList';
import MainHeader from '@/components/organisms/main/MainHeader';
import MainMenu from '@/components/organisms/MainMenu';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const MainPagePresenter = () => (
  <PageLayout>
    <Animated.FlatList data={[
      <MainHeader key={0} />,
      <MainMenu key={1} />,
      <ShortcutTitle key={2} />,
      <ShortcutList key={3} />,
      <RecentlyAddedTitle key={4} />,
      <AlbumList key={5} />,
    ]} renderItem={({ item }) => <>{item}</>} />
    <MiniPlayer />
  </PageLayout>
);

export default MainPagePresenter;
