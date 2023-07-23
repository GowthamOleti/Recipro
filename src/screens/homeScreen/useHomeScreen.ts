import {useEffect, useState} from 'react';
import {useAppTheme} from '../../common/useAppTheme';
import {analyticsTags, trackState} from '../../util/analytics';
import {getStyles} from './homeScreen.styles';

export const useHomeScreen = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const [inputText, setInputText] = useState('');

  useEffect(() => {
    trackState(analyticsTags.screens.home);
  }, []);

  return {inputText, setInputText, styles, theme};
};
