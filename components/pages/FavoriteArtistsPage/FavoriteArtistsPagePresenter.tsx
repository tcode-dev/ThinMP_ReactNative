import React from 'react';
import PageLayout from '@/components/molecules/PageLayout';
import ArtistList from '@/components/organisms/list/ArtistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';

const FavoriteArtistsPagePresenter = () => (
  <PageLayout>
    <PageScrollableContent data={[<ArtistList />]} />
    <MiniPlayer />
  </PageLayout>
);

export default FavoriteArtistsPagePresenter;
