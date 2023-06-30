import {FlatList} from 'react-native';
import React from 'react';
import CarouselPage from './components/carouselPage';
import {apiKeyInstructions} from '../../../appLabels';
import {useInstructionsCarousel} from './useInstructionsCarousel';
import Pagination from './components/Pagination';

const InstructionsCarousel = () => {
  const {handleOnScroll, scrollX} = useInstructionsCarousel();
  return (
    <>
      <FlatList
        data={apiKeyInstructions}
        renderItem={({item}) => <CarouselPage item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
      />
      <Pagination data={apiKeyInstructions} scrollX={scrollX} />
    </>
  );
};

export default InstructionsCarousel;
