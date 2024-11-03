import { atom, useAtom } from 'jotai'
import { checkPermission as check, requestPermission as request } from '@/permission';

const permissionAtom = atom<boolean>();

const usePermissionStore = () => {
  const [hasPermission, setPermission] = useAtom(permissionAtom);
  const requestPermission = async (): Promise<void> => {
    const checked = await check();
    if (checked) {
      setPermission(checked);
    } else {
      const requested = await request();

      setPermission(requested);
    }
  };

  return { hasPermission, requestPermission };
};

export default usePermissionStore;
