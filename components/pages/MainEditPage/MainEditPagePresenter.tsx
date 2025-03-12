import React from 'react';
import { FlatList } from 'react-native';
import PageLayout from '@/components/molecules/PageLayout';
import MainMenu from '@/components/organisms/MainMenu';
import EmptyFooter from '@/components/molecules/listItem/EmptyFooter';

const MainEditPagePresenter = () => (
  <PageLayout>
    <FlatList
      data={[<MainMenu />, <EmptyFooter />]}
      renderItem={({ item }) => <>{item}</>}
      keyExtractor={(item, index) => index.toString()}
    />
  </PageLayout>
);

export default MainEditPagePresenter;
