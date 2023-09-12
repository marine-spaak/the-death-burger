import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import PropTypes from 'prop-types';

import style from './Result.style';

const Result = ({ counterOfRightAnswers }) => {
  const router = useRouter();

  return (
    <View>
      <Text style={style.resultText}>
        {`Vous avez ${counterOfRightAnswers} ${(counterOfRightAnswers <= 1) ? 'bonne réponse' : 'bonnes réponses'} sur 10 !`}
      </Text>
    </View>
  );
};

Result.propTypes = {
  counterOfRightAnswers: PropTypes.number.isRequired,
};

export default Result;
