import { Button, TextInput, View, StyleSheet } from 'react-native';
import Modal from '../Modal';
import PlainText from '@/components/atoms/text/PlainText';
import localize from '@/localize';

export type Props = {
  borderColor: string;
  done: () => void;
  cancel: () => void;
};

const PlaylistModalPresenter: React.FC<Props> = ({ borderColor, done, cancel }) => (
  <Modal>
    <View style={styles.container}>
      <PlainText style={styles.title}>{localize('playlistCreate')}</PlainText>
      <TextInput style={[styles.input, { borderColor }]}></TextInput>
      <View style={styles.buttons}>
        <Button title={localize('done')} onPress={done} />
        <Button title={localize('cancel')} onPress={cancel} />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 40,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default PlaylistModalPresenter;