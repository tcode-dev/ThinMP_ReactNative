import React from 'react';
import SectionTitle from '@/components/atoms/title/SectionTitle';
import localize from '@/localize';

const SongTitleContainer = () => {
  const title = localize('songs');

  return <SectionTitle>{title}</SectionTitle>;
};

export default SongTitleContainer;
