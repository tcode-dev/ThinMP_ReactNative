import React from 'react';
import { FlatList } from 'react-native';
import PageLayout from '@/components/molecules/PageLayout';
import MainMenuEdit from '@/components/organisms/menu/MainMenuEdit';
import EmptyFooter from '@/components/molecules/listItem/EmptyFooter';
import SortableList from '@/components/organisms/list/SortableList';

const MainEditPagePresenter = () => (
  <PageLayout>
    <FlatList
      data={[<MainMenuEdit />, <EmptyFooter />]}
      renderItem={({ item }) => <>{item}</>}
      keyExtractor={(item, index) => index.toString()}
    />
    {/* <SortableList /> */}
  </PageLayout>
);

export default MainEditPagePresenter;
