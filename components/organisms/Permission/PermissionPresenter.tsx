import { StyleSheet, View, Button } from 'react-native';
import MultilineText from '@/components/atoms/text/MultilineText';
import PageLayout from '@/components/molecules/PageLayout';
import localize from '@/localize';

type Props = {
  openAppSettings: () => void;
};

const PermissionPresenter: React.FC<Props> = ({openAppSettings}) => (
  <PageLayout>
    <View style={styles.container}>
      <MultilineText style={styles.text}>{localize('permissionDenied')}</MultilineText>
      <Button title={localize('openAppSettings')} onPress={openAppSettings} />
    </View>
  </PageLayout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  text: {
    marginBottom: 50,
  },
});

export default PermissionPresenter;
