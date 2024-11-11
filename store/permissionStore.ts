import { atom, useAtom } from 'jotai';
import { Result, toLoading, toSuccess } from '@/type/Result';
import { checkPermission, requestPermission as request } from '@/permission';

const permissionAtom = atom<Result<boolean>>(toLoading());

const usePermissionStore = () => {
  const [state, setState] = useAtom(permissionAtom);
  const requestPermission = async (): Promise<void> => {
    const checked = await checkPermission();

    if (checked) {
      setState(toSuccess(checked));
    } else {
      const requested = await request();

      setState(toSuccess(requested));
    }
  };

  return { state, requestPermission };
};

export default usePermissionStore;
