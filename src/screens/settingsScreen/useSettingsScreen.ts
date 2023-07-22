import {useEffect} from 'react';
import {useAppTheme} from '../../common/useAppTheme';
import {analyticsTags, trackState} from '../../util/analytics';
import {getStyles} from './settingsScreen.styles';

export const useSettingsScreen = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  useEffect(() => {
    trackState(analyticsTags.screens.Settings);
  }, []);

  return {
    styles,
  };
};
