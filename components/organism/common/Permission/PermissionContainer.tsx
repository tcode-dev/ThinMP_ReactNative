import usePermissionStore from '@/store/permissionStore';
import PermissionPresenter from './PermissionPresenter';
import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

const PermissionContainer: React.FC<Props> = ({ children }) => {
  const { permission, checkPermission, requestPermission } = usePermissionStore();

  useEffect(() => {
    checkPermission();
  }, []);

  useEffect(() => {
    if (permission === false) {
      requestPermission();
    }
  }, [permission]);

  if (permission) return children;

  if (permission === null) return <></>;

  return <PermissionPresenter />;
}

export default PermissionContainer;
