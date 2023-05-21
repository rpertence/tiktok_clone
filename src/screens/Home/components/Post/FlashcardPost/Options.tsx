import React, {useState} from 'react';
import {View} from 'react-native';
import Text from '../../../../../components/Text';
import Option from './Option';
import EStyleSheet from 'react-native-extended-stylesheet';

const Options = () => {
  const [selectedValue, setSelectedValue] = useState<number>();

  const renderOption = (value: number) => {
    if (selectedValue !== undefined && selectedValue !== value) {
      return null;
    }

    return <Option value={value} onSelect={setSelectedValue} />;
  };

  return (
    <>
      <Text style={styles.title}>How well did you know this?</Text>
      <View style={styles.optionsContainer}>
        {renderOption(1)}
        {renderOption(2)}
        {renderOption(3)}
        {renderOption(4)}
        {renderOption(5)}
      </View>
    </>
  );
};

const styles = EStyleSheet.create({
  title: {
    fontSize: '1.5rem',
    lineHeight: '1.8rem',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: '2.8rem',
    marginBottom: '.5rem',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: '.8rem',
    marginBottom: '2.4rem',
  },
});

export default Options;
