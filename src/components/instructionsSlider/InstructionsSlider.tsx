import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import {apiKeyInstructions} from '../../../appLabels';

const InstructionsSlider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  return (
    <View>
      <FlatList
        data={apiKeyInstructions}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
      />
      <Pagination data={apiKeyInstructions} scrollX={scrollX} />
    </View>
  );
};

export default InstructionsSlider;
