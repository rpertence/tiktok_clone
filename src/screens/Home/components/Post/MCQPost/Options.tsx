import React, {useState} from 'react';
import OptionModel from '../../../../../models/Option';
import Option from './Option';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Answers from '../../../../../models/Answers';

interface OptionsProps {
  options: OptionModel[];
  answers: Answers;
}
const Options = (props: OptionsProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const onChose = () => {
    setShowAnswer(true);
  };

  return (
    <View style={styles.container}>
      {props.options.map(option => {
        const isCorrect =
          props.answers.correct_options.find(
            correctOption => correctOption.id === option.id,
          ) !== undefined;

        return (
          <Option
            key={option.id}
            option={option}
            showAnswer={showAnswer}
            isCorrect={isCorrect}
            onChose={onChose}
          />
        );
      })}
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    marginBottom: '2.4rem',
  },
});

export default Options;
