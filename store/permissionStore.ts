import { atom, useAtom } from 'jotai';
import withState from './utils/withState';
import { checkPermission, requestPermission } from '@/permission';
import { Result, toLoading } from '@/type/Result';


const permissionAtom = atom<Result<boolean>>(toLoading());

const usePermissionStore = () => {
  const [state, setState] = useAtom(permissionAtom);
  const checkAndRequestPermissions = async (): Promise<boolean> => {
    const checked = await checkPermission();
    if (checked) {
      return checked;
    } else {
      return requestPermission();
    }
  };
  const ensurePermissions = async (): Promise<void> => {
    await withState<boolean>(checkAndRequestPermissions, setState);
  };

  return { state, ensurePermissions };
};

export default usePermissionStore;
