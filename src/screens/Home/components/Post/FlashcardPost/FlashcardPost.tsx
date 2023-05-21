import React, {useState} from 'react';
import Text from '../../../../../components/Text';
import FlashcardPostModel from '../../../../../models/FlashcardPost';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ScrollView, View} from 'react-native';
import FONTS from '../../../../../constants/fonts';
import Options from './Options';

interface FlashcardPostProps {
  model: FlashcardPostModel;
}

const FlashcardPost = (props: FlashcardPostProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => setShowAnswer(true)}>
        {props.model.flashcard_front}
      </Text>
      {showAnswer && (
        <>
          <View style={styles.separator} />
          <Text style={styles.answerTitle}>Answer</Text>
          <ScrollView bounces={false}>
            <Text style={styles.answer}>{props.model.flashcard_back}</Text>
          </ScrollView>
          <Options />
        </>
      )}
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: '2.1rem',
    lineHeight: '2.5rem',
  },
  separator: {
    width: '100%',
    borderBottomWidth: '.2rem',
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    marginVertical: '2.4rem',
  },
  answerTitle: {
    ...FONTS.black,
    fontSize: '1.3rem',
    lineHeight: '1.6rem',
    color: '#2DC59F',
  },
  answer: {
    fontSize: '2.1rem',
    lineHeight: '2.5rem',
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default FlashcardPost;
