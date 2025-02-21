import React from 'react';
import { FlatList } from 'react-native';
import EmptyHeader from '@/components/molecules/listItem/EmptyHeader';
import PageLayout from '@/components/molecules/PageLayout';
import ArtistList from '@/components/organisms/list/ArtistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const FavoriteArtistsPagePresenter = () => (
  <PageLayout>
    <FlatList data={[<EmptyHeader key={0} />, <ArtistList key={1} />]} renderItem={({ item }) => item} />
    <MiniPlayer />
  </PageLayout>
);

export default FavoriteArtistsPagePresenter;
