import React from 'react';
import { FlatList } from 'react-native';
import MainHeader from '@/components/molecules/header/MainHeader';
import EmptyFooter from '@/components/molecules/listItem/EmptyFooter';
import PageLayout from '@/components/molecules/PageLayout';
import RecentlyAddedTitle from '@/components/molecules/title/RecentlyAddedTitle';
import ShortcutTitle from '@/components/molecules/title/ShortcutTitle';
import { RecentAlbumList } from '@/components/organisms/list/AlbumList';
import ShortcutList from '@/components/organisms/list/ShortcutList';
import MainMenu from '@/components/organisms/menu/MainMenu';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const MainPagePresenter = () => (
  <PageLayout>
    <FlatList
      data={[<MainHeader key={0} />, <MainMenu key={1} />, <ShortcutTitle key={2} />, <ShortcutList key={3} />, <RecentlyAddedTitle key={4} />, <RecentAlbumList key={5} />, <EmptyFooter key={6} />]}
      renderItem={({ item }) => <>{item}</>}
      keyExtractor={(item, index) => index.toString()}
    />
    <MiniPlayer />
  </PageLayout>
);

export default MainPagePresenter;
