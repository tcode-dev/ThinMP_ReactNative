import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';
import PageLayoutPresenter, { Props } from './PageLayoutPresenter';

const PageContainer: React.FC<Pick<Props, 'children'>> = ({ children }) => {
  const color = useThemeColor();

  return <PageLayoutPresenter backgroundColor={color.background}>{children}</PageLayoutPresenter>;
};

export default PageContainer;
