import {useCallback, useState} from 'react';
import {useRef} from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewToken,
} from 'react-native';
import {apiKeyInstructions} from '../../../appLabels';

export const useInstructionsCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const [flatListIndex, setFlatListIndex] = useState(0);
  const data = apiKeyInstructions;

  const handleViewableItemsChanged = useCallback(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      setFlatListIndex(viewableItems[0].index ?? 0);
    },
    [],
  );

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
    data,
    flatListIndex,
    handleOnScroll,
    handleViewableItemsChanged,
    scrollX,
  };
};
