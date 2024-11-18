import { Animated, View, StyleSheet } from 'react-native';
import StickyHeader from '@/components/organisms/StickyHeader';
import StickyTitle from '@/components/organisms/StickyTitle';
import SecondaryTitle from '@/components/atoms/Title/SecondaryTitle';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';

export const TITLE_BOTTOM_POSITION = 50;

export type Props = {
  title: string;
  description: string;
  components: React.ReactNode[];
  background: React.ReactNode;
  height: number;
  scrollY: Animated.Value;
  endPoint: number;
};

const CollapsingToolbarPresenter: React.FC<Props> = ({ title, description, components, background, height, scrollY, endPoint }) => {
  return (
    <>
      <StickyHeader title={title} scrollY={scrollY} endPoint={endPoint} />
      <Animated.FlatList
        data={components}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              {background}
              <StickyTitle scrollY={scrollY} endPoint={endPoint}>
                <PrimaryTitle style={[styles.title, { height, lineHeight: height }]}>{title}</PrimaryTitle>
              </StickyTitle>
              <SecondaryTitle style={styles.description}>{description}</SecondaryTitle>
            </View>
          </>
        }
        renderItem={({ item }) => <>{item}</>}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
        scrollEventThrottle={100}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
  },
  title: {
    position: 'absolute',
    right: 0,
    bottom: TITLE_BOTTOM_POSITION,
    left: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  description: {
    position: 'absolute',
    right: 0,
    bottom: 25,
    left: 0,
    textAlign: 'center',
  },
});

export default CollapsingToolbarPresenter;
