import { StyleSheet, View } from 'react-native';
import BackgroundBlurView from '@/components/atoms/BackgroundBlurView';
import PrimaryTitle from '@/components/atoms/title/PrimaryTitle/PrimaryTitlePresenter';
import { getHeaderHeight, Style } from '@/constants/Style';
import BackButton from '@/components/molecules/button/BackButton';
import React from 'react';

export type Props = {
  title: string;
  menu?: React.ReactNode;
};

const HeaderPresenter: React.FC<Props> = ({ title, menu }) => (
  <View style={styles.container}>
    <BackgroundBlurView />
    <View style={styles.content}>
      <View style={styles.button}>
        <BackButton />
      </View>
      <View style={styles.title}>
        <PrimaryTitle>{title}</PrimaryTitle>
      </View>
      <View style={styles.menu}>
        {menu}
      </View>
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
  titleContainer: {
    height: Style.rowHeight,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
  },
  button: {
    width: 50,
    height: 50,
  },
  title: {
    height: Style.rowHeight,
    justifyContent: 'center',
  },
  menu: {
    width: 50,
    height: 50,
  }
});

export default HeaderPresenter;
