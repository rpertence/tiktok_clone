import React from 'react';
import Text from '../../../../components/Text';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View} from 'react-native';

interface SideLinkItemProps {
  icon?: JSX.Element;
  iconText?: string;
  fontSize?: number;
  label: string;
}
const SideLinkItem = (props: SideLinkItemProps) => {
  return (
    <View style={styles.container}>
      {props.icon}
      {props.iconText && (
        <Text style={{fontSize: props.fontSize}}>{props.iconText}</Text>
      )}
      <Text style={styles.text}>{props.label}</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: '1.7rem',
  },
  text: {
    marginTop: '.2rem',
    fontSize: '1.2rem',
  },
});

export default SideLinkItem;
