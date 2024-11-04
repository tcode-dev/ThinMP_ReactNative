import { atom, useAtom } from 'jotai'
import { Result } from '@/type/Result';
import { checkPermission as check, requestPermission as request } from '@/permission';

const permissionAtom = atom<Result<boolean>>({ isLoading: true });

const usePermissionStore = () => {
  const [state, setState] = useAtom(permissionAtom);
  const requestPermission = async (): Promise<void> => {
    const checked = await check();

    if (checked) {
      setState({ isLoading: false, isSuccess: true, value: checked });
    } else {
      const requested = await request();

      setState({ isLoading: false, isSuccess: true, value: requested });
    }
  };

  return { state, requestPermission };
};

export default usePermissionStore;
