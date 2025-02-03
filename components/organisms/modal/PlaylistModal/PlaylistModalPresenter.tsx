import { Button, TextInput, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Modal from '../Modal';
import PlainText from '@/components/atoms/text/PlainText';
import PlainListItem from '@/components/molecules/listItem/PlainListItem';
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
      <View style={styles.createContainer}>
        <PlainText style={styles.title}>{localize('playlistCreate')}</PlainText>
        <TextInput style={[styles.input, { borderColor }]} onChangeText={onChangeText}></TextInput>
        <View style={styles.buttons}>
          <Button title={localize('done')} onPress={create} />
          <Button title={localize('cancel')} onPress={cancelCreate} />
        </View>
      </View>
    ) : (
      <View style={styles.addContainer}>
        <PlainText style={styles.title}>{localize('playlistAdd')}</PlainText>
        <FlatList style={styles.list} data={playlists} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => add(item.id)}>
            <PlainListItem>{item.name}</PlainListItem>
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
  createContainer: {
    width: '100%',
    padding: 40
  },
  addContainer: {
    width: '100%',
    paddingTop: 40,
    paddingRight: 40,
    paddingBottom: 40,
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 40,
  },
  list: {
    marginTop: 20,
  },
  buttons: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default PlaylistModalPresenter;