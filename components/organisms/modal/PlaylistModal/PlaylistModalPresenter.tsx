import { Button, TextInput, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Modal from '../Modal';
import PlainText from '@/components/atoms/text/PlainText';
import localize from '@/localize';
import { PlaylistModel } from '@/model/PlaylistModel';

export type Props = {
  borderColor: string;
  isCreate: boolean;
  playlists: PlaylistModel[];
  add: (playlistId: number) => void;
  cancelAdd: () => void;
  cancelCreate: () => void;
  create: () => void;
  onChangeText: (text: string) => void;
  toCreate: () => void;
};

const PlaylistModalPresenter: React.FC<Props> = ({ playlists, borderColor, isCreate, add, cancelAdd, cancelCreate, create, onChangeText, toCreate }) => (
  <Modal>
    {playlists.length === 0 || isCreate ? (
      <View style={styles.container}>
        <PlainText style={styles.title}>{localize('playlistCreate')}</PlainText>
        <TextInput style={[styles.input, { borderColor }]} onChangeText={onChangeText}></TextInput>
        <View style={styles.buttons}>
          <Button title={localize('done')} onPress={create} />
          <Button title={localize('cancel')} onPress={cancelCreate} />
        </View>
      </View>
    ) : (
      <View style={styles.container}>
        <PlainText style={styles.title}>{localize('playlistAdd')}</PlainText>
        <FlatList data={playlists} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => add(item.id)}>
            <PlainText>{item.name}</PlainText>
          </TouchableOpacity>
        )} />
        <View style={styles.buttons}>
          <Button title={localize('playlistCreate')} onPress={toCreate} />
          <Button title={localize('cancel')} onPress={cancelAdd} />
        </View>
      </View>
    )}
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