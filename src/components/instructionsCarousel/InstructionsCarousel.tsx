import {FlatList, StyleSheet, View, ViewToken} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import CarouselPage from './components/carouselPage';
import {apiKeyInstructions} from '../../../appLabels';
import {Left, Right} from '../../../assets/icons';
import {Pagination} from './components/pagination';

const InstructionsCarousel = () => {
  const flatListRef = useRef<FlatList>(null);
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  const [flatListIndex, setFlatListIndex] = useState(0);
  const data = apiKeyInstructions;

  const handleViewableItemsChanged = useCallback(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      setFlatListIndex(viewableItems[0].index ?? 0);
    },
    [],
  );

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({item}) => <CarouselPage item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
      />
      <View style={styles.bottomContainer}>
        <Left
          onPress={() =>
            flatListRef?.current?.scrollToIndex({
              index: flatListIndex === 0 ? 0 : flatListIndex - 1,
            })
          }
        />
        <Pagination />
        <Right
          onPress={() =>
            flatListRef?.current?.scrollToIndex({
              index:
                flatListIndex === data.length - 1
                  ? flatListIndex
                  : flatListIndex + 1,
            })
          }
        />
      </View>
    </>
  );
};

export default InstructionsCarousel;

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
