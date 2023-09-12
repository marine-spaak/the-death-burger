import {
  View, Text, TextInput,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useRouter } from 'expo-router';
import { useState } from 'react';
import PropTypes from 'prop-types';

import style from '../../Questions/Questions.style';
import specificStyle from '../Answers.style';
import { COLORS } from '../../../constants';

const Answer = ({
  id, answerColor, setAnswersArray, answersArray,
}) => {
  const [input, setInput] = useState('');
  const arrayIndex = id - 1;

  return (
    <View style={specificStyle.eachAnswerContainer}>
      <MaterialCommunityIcons
        name={`numeric-${id}`}
        size={50}
        color={answerColor}
      />
      <TextInput
        style={specificStyle.input}
        onChangeText={(text) => {
          setInput(text);
          // TODO chercher un moyen plus propre pour ça ?
          setAnswersArray((prevAnswersArray) => {
            const updatedArray = [...prevAnswersArray];
            updatedArray[arrayIndex] = text;
            return updatedArray;
          });
        }}
        value={input}
        placeholder="Votre réponse"
        placeholderTextColor={COLORS.gray}
      />
    </View>
  );
};

Answer.propTypes = {
  id: PropTypes.number.isRequired,
  answerColor: PropTypes.any,
  setAnswersArray: PropTypes.func.isRequired,
  answersArray: PropTypes.array.isRequired,
};

Answer.defaultProps = {
  answerColor: COLORS.darkGray,
};

export default Answer;
