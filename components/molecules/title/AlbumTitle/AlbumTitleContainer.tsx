import React from 'react';
import SectionTitle from '@/components/atoms/title/SectionTitle';
import localize from '@/localize';

const AlbumTitleContainer = () => {
  const title = localize('albums');

  return <SectionTitle>{title}</SectionTitle>;
};

export default AlbumTitleContainer;
