import usePermissioStore from '@/store/permissionStore';
import PermissionPresenter from './PermissionPresenter';
import { FC, ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

const PermissionContainer: FC<Props> = ({ children }) => {
  const { permission, checkPermission, requestPermission } = usePermissioStore();

  useEffect(() => {
    checkPermission();
  }, []);

  useEffect(() => {
    requestPermission();
  }, [permission === false]);

  if (permission == null) return <></>;

  if (permission) return <>{children}</>;

  return <PermissionPresenter />;
}

export default PermissionContainer;
