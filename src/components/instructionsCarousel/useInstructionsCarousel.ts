import {useRef} from 'react';
import {Animated, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

export const useInstructionsCarousel = () => {
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

  return {
    handleOnScroll,
    scrollX,
  };
};
