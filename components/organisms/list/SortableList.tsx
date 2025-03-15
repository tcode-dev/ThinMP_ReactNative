import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, runOnJS } from 'react-native-reanimated';

type Item = {
  key: string;
  label: string;
  backgroundColor: string;
};

const initialData: Item[] = [
  { key: '1', label: 'Item 1', backgroundColor: '#ff8a65' },
  { key: '2', label: 'Item 2', backgroundColor: '#f06292' },
  { key: '3', label: 'Item 3', backgroundColor: '#ba68c8' },
  { key: '4', label: 'Item 4', backgroundColor: '#4db6ac' },
  { key: '5', label: 'Item 5', backgroundColor: '#9575cd' },
];

const SortableList = () => {
  const [data, setData] = useState(initialData);
  const activeIndex = useSharedValue(-1);

  const moveItem = (from: number, to: number) => {
    const updatedData = [...data];
    const [movedItem] = updatedData.splice(from, 1);
    updatedData.splice(to, 0, movedItem);
    setData(updatedData);
  };

  const renderItem = ({ item, index }: { item: Item; index: number }) => {
    const translateY = useSharedValue(0);

    const gesture = Gesture.Pan()
      .onStart(() => {
        translateY.value = 0;
        activeIndex.value = index;
      })
      .onUpdate((event) => {
        translateY.value = event.translationY;
        const newIndex = Math.floor((index * 60 + event.translationY) / 60);
        if (newIndex >= 0 && newIndex < data.length && newIndex !== index) {
          runOnJS(moveItem)(index, newIndex);
        }
      })
      .onEnd(() => {
        translateY.value = withSpring(0);
        activeIndex.value = -1;
      });

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }],
        zIndex: activeIndex.value === index ? 1 : 0,
      };
    });

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.item, { backgroundColor: item.backgroundColor }, animatedStyle]}>
          <Text style={styles.text}>{item.label}</Text>
        </Animated.View>
      </GestureDetector>
    );
  };

  return (
    <GestureHandlerRootView>
      {data.map((item, index) => (
        <View key={item.key}>{renderItem({ item, index })}</View>
      ))}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default SortableList;