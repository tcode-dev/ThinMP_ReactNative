import usePermissionStore from '@/store/permissionStore';
import PermissionPresenter from './PermissionPresenter';
import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

const PermissionContainer: React.FC<Props> = ({ children }) => {
  const { hasPermission, requestPermission } = usePermissionStore();

  useEffect(() => {
    requestPermission();
  }, []);

  if (hasPermission) return children;

  if (hasPermission === undefined) return <></>;

  return <PermissionPresenter />;
}

export default PermissionContainer;
