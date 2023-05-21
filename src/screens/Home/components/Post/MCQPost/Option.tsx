import React, {useState} from 'react';
import OptionModel from '../../../../../models/Option';
import Text from '../../../../../components/Text';
import {Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface OptionProps {
  option: OptionModel;
  showAnswer: boolean;
  isCorrect: boolean;
  onChose: () => void;
}

const Option = (props: OptionProps) => {
  const [chosen, setChosen] = useState(false);

  const showCorrect = props.showAnswer && props.isCorrect;
  const showWrong = props.showAnswer && !props.isCorrect && chosen;

  const getColor = () => {
    if (showCorrect) {
      return '#28B18F';
    }

    if (showWrong) {
      return '#DC5F5F';
    }

    return 'rgba(255, 255, 255, 0.2)';
  };

  const onPress = () => {
    if (!props.showAnswer) {
      setChosen(true);
      props.onChose();
    }
  };

  const backgroundColor = getColor();

  return (
    <Pressable style={{...styles.container, backgroundColor}} onPress={onPress}>
      <Text style={styles.text}>{props.option.answer}</Text>
      {showCorrect && <Text style={styles.answerIcon}>􀁣</Text>}
      {showWrong && <Text style={styles.answerIcon}>􀁡</Text>}
    </Pressable>
  );
};

const styles = EStyleSheet.create({
  container: {
    borderRadius: '.8rem',
    width: '100%',
    marginBottom: '.8rem',
    paddingLeft: '1.6rem',
    paddingRight: '3rem',
    paddingVertical: '1.6rem',
    justifyContent: 'center',
  },
  text: {
    fontSize: '1.7rem',
  },
  answerIcon: {
    position: 'absolute',
    right: '1.2rem',
    fontSize: '2.3rem',
    opacity: 0.6,
  },
});

export default Option;
