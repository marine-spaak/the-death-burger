import { View, Text } from 'react-native';
import { images, COLORS, SIZES } from '../../../constants';

import style from '../Questions.style';

const CurrentQuestion = () => (
  <View>
    <View style={style.subtitleContainer}>
      <Text style={style.subtitleText}>Question numéro X</Text>
    </View>

    <View style={style.paragraphContainer}>
      <Text>
        Voici la question courante.
      </Text>
    </View>
  </View>
);

export default CurrentQuestion;
