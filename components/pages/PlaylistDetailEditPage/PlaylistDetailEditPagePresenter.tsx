import React from 'react';
import PlaylistDetailEditHeader from '@/components/molecules/header/PlaylistDetailEditHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import SongEditList from '@/components/organisms/list/SongEditList';

const PlaylistDetailEditPagePresenter = () => (
  <PageLayout>
    <PlaylistDetailEditHeader />
    <PageScrollableContent data={[<SongEditList key={0} />]} />
  </PageLayout>
);

export default PlaylistDetailEditPagePresenter;
