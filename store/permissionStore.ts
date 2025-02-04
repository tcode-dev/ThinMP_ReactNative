import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { checkPermission, requestPermission } from '@/permission';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const permissionAtom = atom<Result<boolean>>(toLoading());

export const usePermissionStore = () => {
  const [state, setState] = useAtom(permissionAtom);
  const checkAndRequestPermissions = useCallback(async (): Promise<boolean> => {
    const checked = await checkPermission();
    if (checked) {
      return checked;
    } else {
      return requestPermission();
    }
  }, []);
  const ensurePermissions = useCallback(async (): Promise<void> => {
    await withStateAsync<boolean>(checkAndRequestPermissions, setState);
  }, [setState, checkAndRequestPermissions]);

  return { state, ensurePermissions };
};
