import { ReactNode, useEffect } from 'react';
import { Linking } from 'react-native';
import PermissionPresenter from './PermissionPresenter';
import { usePermissionStore } from '@/store/permissionStore';

type Props = {
  children: ReactNode;
};

const PermissionContainer: React.FC<Props> = ({ children }) => {
  const { state, ensurePermissions } = usePermissionStore();

  useEffect(() => {
    ensurePermissions();
  }, [ensurePermissions]);

  if (state.isLoading) return null;
  if (state.isReady && state.value) return children;

  const openAppSettings = () => {
    Linking.openSettings();
  };

  return <PermissionPresenter openAppSettings={openAppSettings} />;
};

export default PermissionContainer;
