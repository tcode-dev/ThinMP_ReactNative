import { atom, useAtom } from 'jotai'
import { checkPermission as check, requestPermission as request} from '@/permission/permission';

const permissionAtom = atom<boolean>();

const usePermissionStore = () => {
  const [permission, setPermission] = useAtom(permissionAtom);
  const checkPermission = async (): Promise<void> => {
    const result = await check();

    setPermission(result);
  };
  const requestPermission = async () => {
    const result = await request();

    setPermission(result);
  };

  return { permission, checkPermission, requestPermission };
};

export default usePermissionStore;
