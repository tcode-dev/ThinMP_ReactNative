import React from 'react';
import FavoriteSongsEditHeader from '@/components/molecules/header/FavoriteSongsEditHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import SongEditList from '@/components/organisms/list/SongEditList';

const FavoriteSongsEditPagePresenter = () => (
  <PageLayout>
    <FavoriteSongsEditHeader />
    <PageScrollableContent data={[<SongEditList key={0} />]} />
  </PageLayout>
);

export default FavoriteSongsEditPagePresenter;
