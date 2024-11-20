import { atom, useAtom } from 'jotai';
import { Result, toLoading } from '@/type/Result';
import { checkPermission as check, requestPermission as request } from '@/permission';
import withState from './utils/withState';

const permissionAtom = atom<Result<boolean>>(toLoading());

const usePermissionStore = () => {
  const [state, setState] = useAtom(permissionAtom);
  const checkPermission = async (): Promise<void> => {
    await withState<boolean>(check, setState);
  };
  const requestPermission = async (): Promise<void> => {
    await withState<boolean>(request, setState);
  };

  return { state, checkPermission, requestPermission };
};

export default usePermissionStore;
