import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { images, COLORS, SIZES } from '../../../constants';

import style from '../Questions.style';
import specificStyle from './CurrentQuestion.style';

import questionsData from '../../../assets/data/questionsData';

const CurrentQuestion = ({ currentQuestionId }) => (
  <View>
    <View style={specificStyle.subtitleContainer}>
      <Text style={style.subtitleText}>Question numéro</Text>
      <MaterialCommunityIcons
        name={`numeric-${currentQuestionId + 1}`}
        size={50}
        color={COLORS.lightYellow}
      />
    </View>

    <View style={style.paragraphContainer}>
      <MaterialCommunityIcons
        name="alarm-multiple"
        size={50}
        color={COLORS.darkRed}
      />
    </View>

    <View style={specificStyle.questionContainer}>
      <Text style={specificStyle.questionText}>
        {questionsData[currentQuestionId].text}
      </Text>
    </View>
  </View>
);

CurrentQuestion.propTypes = {
  currentQuestionId: PropTypes.number.isRequired,
};

export default CurrentQuestion;
