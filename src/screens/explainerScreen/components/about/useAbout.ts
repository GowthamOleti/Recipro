import {useEffect, useState} from 'react';
import {Linking} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {useAppTheme} from '../../../../common/useAppTheme';
import {analyticsTags, trackAction} from '../../../../util/analytics';
import {isFirstTime} from '../../../../util/handleSettings';
import {logError, onFeedbackPress} from '../../../../util/helpers';
import {getStyles} from './about.styles';

export const useAbout = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const [read, setRead] = useState(false);
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    isFirstTime()
      .then(value => setFirstTime(value))
      .catch(error => {
        logError(error);
      });
  }, []);

  useEffect(() => {
    if (read) {
      trackAction(analyticsTags.onboarding.aboutScreenRead);
    }
  }, [read]);

  const handleScroll = async (event: {
    nativeEvent: {contentOffset: any; contentSize: any; layoutMeasurement: any};
  }) => {
    const {contentOffset, contentSize, layoutMeasurement} = event.nativeEvent;
    const isScrolledToEnd =
      contentOffset.y >= contentSize.height - layoutMeasurement.height;
    if ((await isFirstTime()) && isScrolledToEnd) {
      setRead(true);
    }
  };

  const onPrivacyPolicyLinkPress = () => {
    trackAction(analyticsTags.privacyPolicy);
    Linking.openURL(appLabels.explainer.about.privacyPolicyLink);
  };

  const onFeedbackLinkPress = () => {
    trackAction(analyticsTags.feedback);
    onFeedbackPress();
  };

  return {
    firstTime,
    handleScroll,
    onFeedbackLinkPress,
    onPrivacyPolicyLinkPress,
    styles,
    theme,
  };
};
