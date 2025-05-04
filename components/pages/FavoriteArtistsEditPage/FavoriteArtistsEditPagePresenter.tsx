import React from 'react';
import FavoriteArtistsEditHeader from '@/components/molecules/header/FavoriteArtistsEditHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import { FavoriteArtistEditList } from '@/components/organisms/list/ArtistEditList';

const FavoriteArtistsEditPagePresenter = () => (
  <PageLayout>
    <FavoriteArtistsEditHeader />
    <PageScrollableContent data={[<FavoriteArtistEditList key={0} />]} />
  </PageLayout>
);

export default FavoriteArtistsEditPagePresenter;
