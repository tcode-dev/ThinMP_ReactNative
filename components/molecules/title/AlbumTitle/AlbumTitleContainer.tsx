import React from 'react';
import localize from '@/localize';
import SectionTitle from '@/components/atoms/title/SectionTitle';

const AlbumTitleContainer = () => {
  const title = localize('albums');

  return <SectionTitle>{title}</SectionTitle>;
};

export default AlbumTitleContainer;
