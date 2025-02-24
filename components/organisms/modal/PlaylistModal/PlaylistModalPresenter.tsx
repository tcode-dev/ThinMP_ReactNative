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
        <View style={styles.header}>
          <PlainText style={styles.title}>{localize('playlistCreate')}</PlainText>
        </View>
        <TextInput style={[styles.input, { borderColor }]} onChangeText={onChangeText}></TextInput>
        <View style={styles.footer}>
          <Button title={localize('done')} onPress={create} />
          <Button title={localize('cancel')} onPress={cancelCreate} />
        </View>
      </View>
    ) : (
      <View style={styles.addContainer}>
        <View style={styles.header}>
          <PlainText style={styles.title}>{localize('playlistAdd')}</PlainText>
        </View>
        <FlatList
          data={playlists}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => add(item.id)}>
              <PlainListItem>{item.name}</PlainListItem>
            </TouchableOpacity>
          )}
          style={styles.list}
        />
        <View style={styles.footer}>
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
  },
  addContainer: {
    width: '100%',
    maxHeight: '100%',
  },
  header: {
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  input: {
    height: 40,
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
  },
  list: {
    paddingRight: 30,
    paddingLeft: 10,
  }
});

export default PlaylistModalPresenter;
