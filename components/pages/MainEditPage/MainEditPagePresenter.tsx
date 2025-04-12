import React from 'react';
import { FlatList } from 'react-native';
import PageLayout from '@/components/molecules/PageLayout';
import MainMenuEdit from '@/components/organisms/menu/MainMenuEdit';
import EmptyFooter from '@/components/molecules/listItem/EmptyFooter';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import MainEditHeader from '@/components/molecules/header/MainEditHeader';
import ShortcutEditList from '@/components/organisms/list/ShortcutEditList';
import ShortcutTitle from '@/components/molecules/title/ShortcutTitle';

const MainEditPagePresenter = () => (
  <PageLayout>
    <MainEditHeader />
    <PageScrollableContent data={[<FlatList data={[<MainMenuEdit />, <ShortcutTitle />, <ShortcutEditList />, <EmptyFooter />]} renderItem={({ item }) => <>{item}</>} keyExtractor={(item, index) => index.toString()} />]} />
  </PageLayout>
);

export default MainEditPagePresenter;
