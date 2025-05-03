import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PlaylistDetailEditHeader from '@/components/molecules/header/PlaylistDetailEditHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import { PlaylistSongEditList } from '@/components/organisms/list/SongEditList';

export type Props = {
  borderColor: string;
  name: string;
  onChangeText: (text: string) => void;
};

const PlaylistDetailEditPagePresenter: React.FC<Props> = ({ borderColor, name, onChangeText }) => (
  <PageLayout>
    <PlaylistDetailEditHeader />
    <PageScrollableContent
      data={[
        <TextInput style={[styles.input, { borderColor }]} onChangeText={onChangeText} key={0}>
          {name}
        </TextInput>,
        <PlaylistSongEditList key={1} />,
      ]}
    />
  </PageLayout>
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default PlaylistDetailEditPagePresenter;
