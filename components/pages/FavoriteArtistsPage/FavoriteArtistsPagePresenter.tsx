import React from 'react';
import FavoriteArtistsHeader from '@/components/molecules/header/FavoriteArtistsHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import ArtistList from '@/components/organisms/list/ArtistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const FavoriteArtistsPagePresenter = () => (
  <PageLayout>
    <FavoriteArtistsHeader />
    <PageScrollableContent data={[<ArtistList />]} />
    <MiniPlayer />
  </PageLayout>
);

export default FavoriteArtistsPagePresenter;
