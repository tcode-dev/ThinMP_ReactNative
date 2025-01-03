import { ReactNode, useEffect } from 'react';
import PermissionPresenter from './PermissionPresenter';
import { usePermissionStore } from '@/store/permissionStore';

type Props = {
  children: ReactNode;
};

const PermissionContainer: React.FC<Props> = ({ children }) => {
  const { state, ensurePermissions } = usePermissionStore();

  useEffect(() => {
    ensurePermissions();
  }, []);

  if (state.isLoading) return null;
  if (state.isReady && state.value) return children;

  return <PermissionPresenter />;
};

export default PermissionContainer;
