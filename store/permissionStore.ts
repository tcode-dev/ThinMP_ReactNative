import { atom, useAtom } from 'jotai';
import { checkPermission, requestPermission } from '@/permission';
import { withState } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const permissionAtom = atom<Result<boolean>>(toLoading());

export const usePermissionStore = () => {
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
