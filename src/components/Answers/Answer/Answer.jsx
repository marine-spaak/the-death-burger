import {
  View, Text, TextInput,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useRouter } from 'expo-router';
import PropTypes from 'prop-types';

import style from '../../Questions/Questions.style';
import specificStyle from '../Answers.style';
import { COLORS } from '../../../constants';

const Answer = ({ id, answerColor }) => (
  <View style={specificStyle.eachAnswerContainer}>
    <MaterialCommunityIcons
      name={`numeric-${id}`}
      size={50}
      color={answerColor}
    />
    <TextInput
      style={specificStyle.input}
      onChangeText={() => {}}
      value=""
      placeholder="Votre réponse"
      placeholderTextColor={COLORS.gray}
    />
  </View>
);

Answer.propTypes = {
  id: PropTypes.number.isRequired,
  answerColor: PropTypes.any,
};

Answer.defaultProps = {
  answerColor: COLORS.darkGray,
};

export default Answer;
