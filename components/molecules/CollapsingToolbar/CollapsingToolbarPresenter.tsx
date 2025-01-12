import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';
import SecondaryTitle from '@/components/atoms/Title/SecondaryTitle';
import StickyHeader from '@/components/organisms/StickyHeader';
import StickyTitle from '@/components/organisms/StickyTitle';
import { Style } from '@/constants/Style';

export const TITLE_BOTTOM_POSITION = 50;

export type Props = {
  title: string;
  description: string;
  components: React.ReactNode[];
  background: React.ReactNode;
  scrollY: Animated.Value;
  endPoint: number;
};

const CollapsingToolbarPresenter: React.FC<Props> = ({ title, description, components, background, scrollY, endPoint }) => {
  return (
    <>
      <StickyHeader title={title} scrollY={scrollY} endPoint={endPoint} />
      <Animated.FlatList
        data={components}
        ListHeaderComponent={
          <View style={styles.header}>
            {background}
            <StickyTitle scrollY={scrollY} endPoint={endPoint}>
              <PrimaryTitle style={[styles.title, { height: Style.headerTitleHeight, lineHeight: Style.headerTitleHeight }]}>{title}</PrimaryTitle>
            </StickyTitle>
            <SecondaryTitle style={styles.description}>{description}</SecondaryTitle>
          </View>
        }
        renderItem={({ item }) => <>{item}</>}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
        scrollEventThrottle={100}
      />
    </>
  );
};

const styles = StyleSheet.create({
  description: {
    bottom: 25,
    left: 0,
    position: 'absolute',
    right: 0,
    textAlign: 'center',
  },
  header: {
    position: 'relative',
  },
  title: {
    bottom: TITLE_BOTTOM_POSITION,
    left: 0,
    position: 'absolute',
    right: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
});

export default CollapsingToolbarPresenter;
