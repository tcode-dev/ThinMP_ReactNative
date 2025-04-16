import React from 'react';
import { FlatList } from 'react-native';
import MainEditHeader from '@/components/molecules/header/MainEditHeader';
import EmptyFooter from '@/components/molecules/listItem/EmptyFooter';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import ShortcutTitle from '@/components/molecules/title/ShortcutTitle';
import ShortcutEditList from '@/components/organisms/list/ShortcutEditList';
import MainMenuEdit from '@/components/organisms/menu/MainMenuEdit';

const MainEditPagePresenter = () => (
  <PageLayout>
    <MainEditHeader />
    <PageScrollableContent data={[<FlatList data={[<MainMenuEdit />, <ShortcutTitle />, <ShortcutEditList />, <EmptyFooter />]} renderItem={({ item }) => <>{item}</>} keyExtractor={(item, index) => index.toString()} />]} />
  </PageLayout>
);

export default MainEditPagePresenter;
