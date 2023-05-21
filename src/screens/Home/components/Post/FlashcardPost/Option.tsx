import React from 'react';
import {Pressable} from 'react-native';
import Text from '../../../../../components/Text';
import EStyleSheet from 'react-native-extended-stylesheet';

interface OptionProps {
  value: number;
  onSelect: (value: number) => void;
}

const Option = (props: OptionProps) => {
  const getColor = () => {
    switch (props.value) {
      case 1:
        return '#F17D23';
      case 2:
        return '#FBB668';
      case 3:
        return '#FFD449';
      case 4:
        return '#16624F';
      case 5:
        return '#1F8A70';
      default:
        return 'gray';
    }
  };

  const onPress = () => {
    props.onSelect(props.value);
  };

  return (
    <Pressable
      style={{...styles.container, backgroundColor: getColor()}}
      onPress={onPress}>
      <Text>{props.value}</Text>
    </Pressable>
  );
};

const styles = EStyleSheet.create({
  container: {
    borderRadius: '.8rem',
    height: '5.2rem',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: '1.7rem',
  },
});

export default Option;
