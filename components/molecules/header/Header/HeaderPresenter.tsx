import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import BackgroundBlurView from '@/components/atoms/BackgroundBlurView';
import PrimaryTitle from '@/components/atoms/title/PrimaryTitle/PrimaryTitlePresenter';
import BackButton from '@/components/molecules/button/BackButton';
import { getHeaderHeight, Style } from '@/constants/Style';

export type Props = {
  title: string;
  opacity?: Animated.Value;
  menu?: React.ReactNode;
};

const HeaderPresenter: React.FC<Props> = ({ title, menu, opacity }) => (
  <View style={styles.container}>
    <Animated.View style={[styles.container, { opacity }]}>
      <BackgroundBlurView />
      <View style={styles.titleContainer}>
        <PrimaryTitle style={styles.title}>{title}</PrimaryTitle>
      </View>
    </Animated.View>
    <View style={styles.content}>
      <View style={styles.button}>
        <BackButton />
      </View>
      <View style={styles.menu}>{menu}</View>
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
    width: 50,
    height: 50,
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
  menu: {
    width: 50,
    height: 50,
  },
});

export default HeaderPresenter;
