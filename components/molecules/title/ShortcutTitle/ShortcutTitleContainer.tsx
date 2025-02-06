import React from 'react';
import ShortcutTitlePresenter from './ShortcutTitlePresenter';
import localize from '@/localize';

const ShortcutTitleContainer = () => {
  const title = localize('shortcut');

  return <ShortcutTitlePresenter>{title}</ShortcutTitlePresenter>;
};

export default ShortcutTitleContainer;
