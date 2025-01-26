import { ReactNode } from 'react';
import SectionTitle from '@/components/atoms/title/SectionTitle';

export type Props = {
  children: ReactNode;
};

const RecentlyAddedTitlePresenter: React.FC<Props> = ({ children }) => <SectionTitle>{children}</SectionTitle>;

export default RecentlyAddedTitlePresenter;
