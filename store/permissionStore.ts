import { atom, useAtom } from 'jotai'
import { PermissionsAndroid } from 'react-native';

const permissionAtom = atom<boolean>();

const usePermissioStore = () => {
  const [permission, setPermission] = useAtom(permissionAtom);
  const checkPermission = async (): Promise<void> => {
    const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO);
    setPermission(result);
  };
  const requestPermission = async () => {
    const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO);
    setPermission(result === PermissionsAndroid.RESULTS.GRANTED);
  };
  return { permission, checkPermission, requestPermission };
};

export default usePermissioStore;
