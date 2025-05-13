import { ReactNode, useEffect, useRef } from 'react';
import { AppState, AppStateStatus, Linking } from 'react-native';
import PermissionPresenter from './PermissionPresenter';
import { usePermissionStore } from '@/store/permissionStore';

type Props = {
  children: ReactNode;
};

const PermissionContainer: React.FC<Props> = ({ children }) => {
  const { state, ensurePermissions } = usePermissionStore();
  const appState = useRef<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    ensurePermissions();
  }, [ensurePermissions]);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        ensurePermissions();
      }
      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, [ensurePermissions]);

  if (state.isLoading) return null;
  if (state.isReady && state.value) return children;

  const openAppSettings = () => {
    Linking.openSettings();
  };

  return <PermissionPresenter openAppSettings={openAppSettings} />;
};

export default PermissionContainer;
