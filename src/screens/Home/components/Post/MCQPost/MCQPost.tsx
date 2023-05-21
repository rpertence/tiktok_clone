import React from 'react';
import Text from '../../../../../components/Text';
import MCQPostModel from '../../../../../models/MCQPost';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Options from './Options';

interface MCQPostProps {
  model: MCQPostModel;
}

const MCQPost = (props: MCQPostProps) => {
  console.log('POST ID', props.model.id);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.model.question}</Text>
      </View>
      <Options options={props.model.options} answers={props.model.answer} />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: '2.1rem',
    lineHeight: '2.5rem',
  },
});

export default MCQPost;
