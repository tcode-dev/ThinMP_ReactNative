import React from 'react';
import localize from '@/localize';
import SectionTitle from '@/components/atoms/title/SectionTitle';

const SongTitleContainer = () => {
  const title = localize('songs');

  return <SectionTitle>{title}</SectionTitle>;
};

export default SongTitleContainer;
