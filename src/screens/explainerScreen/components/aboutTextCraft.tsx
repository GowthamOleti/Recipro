import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {appLabels} from '../../../../appLabels';
import {ThemeProps, useAppTheme} from '../../../common/useAppTheme';

export const AboutTextCraft = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
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
        {appLabels.explainer.about.conclusion}
      </Text>
    </ScrollView>
  );
};

const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    contentContainer: {
      paddingRight: '3%',
    },
    aboutText: {
      fontFamily: fonts.Sans,
      fontSize: 18,
      color: colors.text,
      flexDirection: 'row',
    },
  });
