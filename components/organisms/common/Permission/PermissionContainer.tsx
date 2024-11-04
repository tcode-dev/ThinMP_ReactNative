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

  if (state.isLoading) return <></>;

  if (state.isSuccess && state.value) return children;

  return <PermissionPresenter />;
}

export default PermissionContainer;
