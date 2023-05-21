import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import COLORS from '../../constants/colors';
import FONTS from '../../constants/fonts';

interface TextProps extends RNTextProps {}

const Text = (props: TextProps) => {
  return <RNText {...props} style={[styles.text, props.style]} />;
};

const styles = StyleSheet.create({
  text: {
    ...FONTS.regular,
    color: COLORS.white,
  },
});

export default Text;
