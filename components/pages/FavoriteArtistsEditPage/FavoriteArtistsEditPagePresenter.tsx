import React from 'react';
import FavoriteArtistsEditHeader from '@/components/molecules/header/FavoriteArtistsEditHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import ArtistEditList from '@/components/organisms/list/ArtistEditList';

const FavoriteArtistsEditPagePresenter = () => (
  <PageLayout>
    <FavoriteArtistsEditHeader />
    <PageScrollableContent data={[<ArtistEditList key={0} />]} />
  </PageLayout>
);

export default FavoriteArtistsEditPagePresenter;
