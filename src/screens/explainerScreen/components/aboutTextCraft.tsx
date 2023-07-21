import React, {useEffect, useState} from 'react';
import {Linking, ScrollView, StyleSheet, Text} from 'react-native';
import {appLabels} from '../../../../appLabels';
import {ThemeProps, useAppTheme} from '../../../common/useAppTheme';
import {analyticsTags, trackAction} from '../../../util/analytics';
import {isFirstTime} from '../../../util/handleSettings';

export const AboutTextCraft = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const [read, setRead] = useState(false);

  useEffect(() => {
    if (read) {
      trackAction(analyticsTags.onboarding.aboutScreenRead);
    }
  }, [read]);

  const handleScroll = async event => {
    const {contentOffset, contentSize, layoutMeasurement} = event.nativeEvent;
    const isScrolledToEnd =
      contentOffset.y >= contentSize.height - layoutMeasurement.height;
    if ((await isFirstTime()) && isScrolledToEnd) {
      setRead(true);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      onScroll={handleScroll}>
      <Text style={styles.aboutText}>{appLabels.explainer.about.intro}</Text>
      <Text style={styles.aboutText}>
        <Text style={[styles.aboutText, {fontFamily: theme.fonts.SansBold}]}>
          {appLabels.explainer.about.summarizePrefix}
        </Text>
        {appLabels.explainer.about.summarizeDescription}
      </Text>
      <Text style={styles.aboutText}>
        <Text style={[styles.aboutText, {fontFamily: theme.fonts.SansBold}]}>
          {appLabels.explainer.about.rewritePrefix}
        </Text>
        {appLabels.explainer.about.rewriteDescription}
      </Text>
      <Text style={styles.aboutText}>
        <Text style={styles.aboutText}>
          {appLabels.explainer.about.dataCollection}
        </Text>
        <Text
          style={[styles.aboutText, {color: theme.colors.common.link}]}
          onPress={() => {
            trackAction(analyticsTags.privacyPolicy);
            Linking.openURL(appLabels.explainer.about.privacyPolicyLink);
          }}>
          {appLabels.explainer.about.privacyPolicy}
        </Text>
        <Text style={styles.aboutText}>
          {appLabels.explainer.about.conclusion}
        </Text>
      </Text>
    </ScrollView>
  );
};

const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    contentContainer: {
      paddingRight: '3%',
      paddingBottom: '8%',
    },
    aboutText: {
      fontFamily: fonts.Sans,
      fontSize: 18,
      color: colors.text,
      flexDirection: 'row',
    },
  });
