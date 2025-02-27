import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import PrimaryTitle from '@/components/atoms/title/PrimaryTitle/PrimaryTitlePresenter';
import SecondaryTitle from '@/components/atoms/title/SecondaryTitle';
import StickyHeader, { Props as StickyHeaderProps} from '@/components/organisms/sticky/StickyHeader';
import StickyTitle from '@/components/organisms/sticky/StickyTitle';
import { Style } from '@/constants/Style';

export const TITLE_BOTTOM_POSITION = 50;

export type Props = {
  description: string;
  components: React.ReactNode[];
  background: React.ReactNode;
  scrollY: Animated.Value;
  endPoint: number;
} & Pick<StickyHeaderProps, 'title' | 'menu'>;

const CollapsingToolbarPresenter: React.FC<Props> = ({ title, menu, description, components, background, scrollY, endPoint }) => (
  <>
    <StickyHeader title={title} menu={menu} scrollY={scrollY} endPoint={endPoint} />
    <Animated.FlatList
      data={components}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <View style={styles.header}>
          {background}
          <StickyTitle scrollY={scrollY} endPoint={endPoint}>
            <PrimaryTitle style={[styles.title, { height: Style.rowHeight, lineHeight: Style.rowHeight }]}>{title}</PrimaryTitle>
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
