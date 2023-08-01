import React from 'react';
import {Image, ScrollView, Text} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {Logo} from '../../../../assets/icons';
import {useAbout} from './useAbout';

export const About = () => {
  const {
    firstTime,
    theme,
    styles,
    onFeedbackLinkPress,
    onPrivacyPolicyLinkPress,
    handleScroll,
  } = useAbout();

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      onScroll={handleScroll}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}>{appLabels.explainer.about.intro}</Text>
      <Text style={styles.text}>
        <Text style={[styles.text, {fontFamily: theme.fonts.SansBold}]}>
          {appLabels.explainer.about.summarizePrefix}
        </Text>
        {appLabels.explainer.about.summarizeDescription}
      </Text>
      <Text style={styles.text}>
        <Text style={[styles.text, {fontFamily: theme.fonts.SansBold}]}>
          {appLabels.explainer.about.rewritePrefix}
        </Text>
        {appLabels.explainer.about.rewriteDescription}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.text}>
          {appLabels.explainer.about.dataCollection}
        </Text>
        <Text
          style={[styles.text, {color: theme.colors.common.link}]}
          onPress={onPrivacyPolicyLinkPress}>
          {appLabels.explainer.about.privacyPolicy}
        </Text>
        {firstTime ? (
          <Text style={styles.text}>
            {appLabels.explainer.about.conclusionNewUser}
          </Text>
        ) : (
          <Text style={styles.text}>
            {appLabels.explainer.about.conclusion1}
            <Text
              style={[styles.text, {color: theme.colors.common.link}]}
              onPress={onFeedbackLinkPress}>
              {appLabels.explainer.about.feedbackLink}
            </Text>
            <Text style={styles.text}>
              {appLabels.explainer.about.conclusion2}
            </Text>
          </Text>
        )}
      </Text>
    </ScrollView>
  );
};
