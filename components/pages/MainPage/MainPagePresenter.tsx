import React from 'react';
import { FlatList } from 'react-native';
import PageLayout from '@/components/molecules/PageLayout';
import RecentlyAddedTitle from '@/components/molecules/title/RecentlyAddedTitle';
import ShortcutTitle from '@/components/molecules/title/ShortcutTitle';
import AlbumList from '@/components/organisms/list/AlbumList';
import ShortcutList from '@/components/organisms/list/ShortcutList';
import MainHeader from '@/components/molecules/header/MainHeader';
import MainMenu from '@/components/organisms/menu/MainMenu';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import EmptyFooter from '@/components/molecules/listItem/EmptyFooter';

const MainPagePresenter = () => (
  <PageLayout>
    <FlatList
      data={[<MainHeader />, <MainMenu />, <ShortcutTitle />, <ShortcutList />, <RecentlyAddedTitle />, <AlbumList />, <EmptyFooter />]}
      renderItem={({ item }) => <>{item}</>}
      keyExtractor={(item, index) => index.toString()}
    />
    <MiniPlayer />
  </PageLayout>
);

export default MainPagePresenter;
