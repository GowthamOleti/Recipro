import {FlatList, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import CarouselPage from './components/carouselPage';
import {useInstructionsCarousel} from './useInstructionsCarousel';
import Pagination from './components/Pagination';
import {Left, Right} from '../../../assets/icons';

const InstructionsCarousel = () => {
  const {
    handleOnScroll,
    scrollX,
    data,
    handleViewableItemsChanged,
    flatListIndex,
  } = useInstructionsCarousel();

  const flatListRef = useRef<FlatList>(null);
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

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
        onScroll={handleOnScroll}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={handleViewableItemsChanged}
      />
      <View style={styles.bottomContainer}>
        <Left
          onPress={() =>
            flatListRef?.current?.scrollToIndex({
              index: flatListIndex === 0 ? 0 : flatListIndex - 1,
            })
          }
        />
        <Pagination data={data} scrollX={scrollX} />
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
