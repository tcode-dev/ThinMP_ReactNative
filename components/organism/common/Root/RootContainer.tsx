import { FC, ReactNode } from 'react';
import Permission from '@/components/organism/common/Permission';

type Props = {
  children: ReactNode;
};

const RootContainer: FC<Props> = ({ children }) => {
  return <Permission>{children}</Permission>;
}

export default RootContainer;
