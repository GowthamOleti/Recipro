import {Animated, FlatList, View} from 'react-native';
import React, {useRef} from 'react';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import {useTheme} from '../../util/useTheme';

const InstructionsSlider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const theme = useTheme();

  const handleOnScroll = event => {
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

  const data = [
    {
      title: 'Step 1',
      body: 'Click on the link below and generate a new API secret key for yourself. Make sure you are logged in to your Open AI account',
      link: 'https://platform.openai.com/account/api-keys',
    },
    {
      title: 'Step 2',
      body: 'Add your credit/debit card details here',
      link: 'https://platform.openai.com/account/billing/payment-methods',
    },
    {
      title: 'Note',
      body: 'It is cheap, very cheap. Upon our testing, if you put 40 requests per day (20 rewrites and 20 summarizing) it costs you 3 paise. Which mean it will cost you just over 9/- per month',
    },
    {
      title: 'Pro Tip',
      body: 'You can set your usage limit. You can set it to as low as $1 per month. $1 usage is almost 250 requests per month!',
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
      />
      <Pagination data={data} scrollX={scrollX} />
    </View>
  );
};

export default InstructionsSlider;
