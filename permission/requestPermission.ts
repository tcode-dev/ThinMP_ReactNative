import Audio from 'audio';
import { PermissionsAndroid, Platform } from 'react-native';

const requestPermission = Platform.select({
  android: async (): Promise<boolean> => {
    const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO);

    return result === PermissionsAndroid.RESULTS.GRANTED;
  },
  ios: async (): Promise<boolean> => {
    return await Audio.requestPermissionIos();
  },
})!;

export default requestPermission;
