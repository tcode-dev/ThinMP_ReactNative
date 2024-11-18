import { Animated } from 'react-native';
import StickyHeader from '@/components/organisms/StickyHeader';

export type Props = {
  title: string;
  components: React.ReactNode[];
  scrollY: Animated.Value;
  endPoint: number;
  children: (scrollY: Animated.Value, endPoint: number) => React.ReactNode;
}

const CollapsingToolbarPresenter: React.FC<Props> = ({ title, components, scrollY, endPoint, children }) => {
  return (
    <>
      <StickyHeader title={title} scrollY={scrollY} endPoint={endPoint} />
      <Animated.FlatList
        data={components}
        ListHeaderComponent={() => children(scrollY, endPoint)}
        renderItem={({ item }) => <>{item}</>}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
        scrollEventThrottle={100}
      />
    </>
  );
};

export default CollapsingToolbarPresenter;
