import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import BackgroundBlurView from '@/components/atoms/BackgroundBlurView';
import PlainText from '@/components/atoms/text/PlainText';
import PrimaryTitle from '@/components/atoms/title/PrimaryTitle/PrimaryTitlePresenter';
import { getHeaderHeight, Style } from '@/constants/Style';
import localize from '@/localize';

export type Props = {
  opacity?: Animated.Value;
  done: () => void;
  cancel: () => void;
};

const EditHeaderPresenter: React.FC<Props> = ({ done, cancel, opacity }) => (
  <View style={styles.container}>
    <Animated.View style={[styles.container, { opacity }]}>
      <BackgroundBlurView />
      <View style={styles.titleContainer}>
        <PrimaryTitle style={styles.title}>{localize('edit')}</PrimaryTitle>
      </View>
    </Animated.View>
    <View style={styles.content}>
      <TouchableOpacity style={styles.button} onPress={cancel}>
        <PlainText>{localize('cancel')}</PlainText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={done}>
        <PlainText>{localize('done')}</PlainText>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: getHeaderHeight(),
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  content: {
    width: '100%',
    height: Style.rowHeight,
    lineHeight: Style.rowHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
  button: {
    height: Style.rowHeight,
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20,
  },
  titleContainer: {
    textAlign: 'center',
    height: Style.rowHeight,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    right: 50,
    left: 50,
  },
  title: {
    textAlign: 'center',
  },
});

export default EditHeaderPresenter;
