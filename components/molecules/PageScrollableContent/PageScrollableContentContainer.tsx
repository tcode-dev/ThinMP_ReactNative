import React, { ReactNode } from 'react';
import { FlatList } from 'react-native';
import EmptyFooter from '../listItem/EmptyFooter';
import EmptyHeader from '../listItem/EmptyHeader';

export type Props = {
  data: ReactNode[];
};

const PageScrollableContentContainer: React.FC<Props> = ({ data }) => {
  const list = [<EmptyHeader />, ...data, <EmptyFooter />];

  return <FlatList data={list} renderItem={({ item }) => <>{item}</>} keyExtractor={(item, index) => index.toString()} />;
};

export default PageScrollableContentContainer;
