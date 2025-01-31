import { Button, TextInput, View } from 'react-native';
import Modal from '../Modal';
import SectionTitle from '@/components/atoms/title/SectionTitle';
import localize from '@/localize';

const PlaylistModalPresenter = () => (
  <Modal>
    <View>
      <SectionTitle style={{ fontWeight: 'bold', marginBottom: 10 }}>{localize('playlistCreate')}</SectionTitle>
      <TextInput></TextInput>
      <View><Button title={localize('done')} /><Button title={localize('cancel')} /></View>
    </View>
  </Modal>
);

export default PlaylistModalPresenter;