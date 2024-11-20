import { ReactNode, useEffect } from 'react';
import usePermissionStore from '@/store/permissionStore';
import PermissionPresenter from './PermissionPresenter';

type Props = {
  children: ReactNode;
};

const PermissionContainer: React.FC<Props> = ({ children }) => {
  const { state, checkPermission, requestPermission } = usePermissionStore();

  useEffect(() => {
    checkPermission();
  }, []);

  useEffect(() => {
    if (state.isReady && !state.value) {
      requestPermission();
    }
  }, [state]);

  if (state.isLoading) return null;
  if (state.isReady && state.value) return children;

  return <PermissionPresenter />;
};

export default PermissionContainer;
