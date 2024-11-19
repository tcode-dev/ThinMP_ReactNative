import usePermissionStore from '@/store/permissionStore';
import PermissionPresenter from './PermissionPresenter';
import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

const PermissionContainer: React.FC<Props> = ({ children }) => {
  const { state, requestPermission } = usePermissionStore();

  useEffect(() => {
    requestPermission();
  }, []);

  if (state.isReady && state.value) return children;
  if (state.isLoading) return null;

  return <PermissionPresenter />;
};

export default PermissionContainer;
