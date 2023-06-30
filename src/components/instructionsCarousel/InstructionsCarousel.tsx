import {FlatList} from 'react-native';
import React from 'react';
import CarouselPage from './components/carouselPage';
import {apiKeyInstructions} from '../../../appLabels';
import Pagination from './components/Pagination';

const InstructionsCarousel = () => {
  return (
    <>
      <FlatList
        data={apiKeyInstructions}
        renderItem={({item}) => <CarouselPage item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <Pagination />
    </>
  );
};

export default InstructionsCarousel;
