import { Text, View } from 'react-native';
import Modal from '../Modal';

const PlaylistModalPresenter = () => (
  <Modal>
    <View>
      <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Modal Screen</Text>
    </View>
  </Modal>
);

export default PlaylistModalPresenter;