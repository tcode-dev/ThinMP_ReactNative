import React from 'react';
import { FlatList } from 'react-native';
import PageLayout from '@/components/molecules/PageLayout';
import MainMenuEdit from '@/components/organisms/menu/MainMenuEdit';
import EmptyFooter from '@/components/molecules/listItem/EmptyFooter';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import MainEditHeader from '@/components/molecules/header/MainEditHeader';

const MainEditPagePresenter = () => (
  <PageLayout>
    <MainEditHeader />
    <PageScrollableContent data={[
      <FlatList
        data={[<MainMenuEdit />, <EmptyFooter />]}
        renderItem={({ item }) => <>{item}</>}
        keyExtractor={(item, index) => index.toString()}
      />
    ]} />
  </PageLayout>
);

export default MainEditPagePresenter;
