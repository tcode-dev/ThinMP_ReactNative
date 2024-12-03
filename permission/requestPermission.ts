import Audio from 'audio';
import { PermissionsAndroid, Platform } from 'react-native';

const requestPermission = Platform.select({
  android: async (): Promise<boolean> => {
    const results = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO, PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS]);

    return Object.values(results).every((status) => status === PermissionsAndroid.RESULTS.GRANTED);
  },
  ios: async (): Promise<boolean> => {
    return await Audio.requestPermission();
  },
})!;

export default requestPermission;
