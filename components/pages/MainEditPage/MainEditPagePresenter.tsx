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
    <PageScrollableContent
      data={[
        <FlatList
          data={[<MainMenuEdit key={0} />, <ShortcutTitle key={1} />, <ShortcutEditList key={2} />, <EmptyFooter key={3} />]}
          renderItem={({ item }) => <>{item}</>}
          keyExtractor={(_item, index) => index.toString()}
          key={0}
        />,
      ]}
    />
  </PageLayout>
);

export default MainEditPagePresenter;
