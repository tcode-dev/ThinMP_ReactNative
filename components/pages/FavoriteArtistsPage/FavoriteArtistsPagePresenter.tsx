import React from 'react';
import PageLayout from '@/components/molecules/PageLayout';
import ArtistList from '@/components/organisms/list/ArtistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import FavoriteArtistsHeader from '@/components/molecules/header/FavoriteArtistsHeader';

const FavoriteArtistsPagePresenter = () => (
  <PageLayout>
    <FavoriteArtistsHeader />
    <PageScrollableContent data={[<ArtistList />]} />
    <MiniPlayer />
  </PageLayout>
);

export default FavoriteArtistsPagePresenter;
