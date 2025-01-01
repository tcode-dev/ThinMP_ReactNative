import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/Colors';

export const useThemeColor = () => {
  const theme = useColorScheme();

  if (theme === 'dark') {
    return Colors.dark;
  } else {
    return Colors.light;
  }
};
