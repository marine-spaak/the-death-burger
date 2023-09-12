import { View, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { images, COLORS, SIZES } from '../../../constants';

import style from '../Questions.style';
import specificStyle from '../CurrentQuestion/CurrentQuestion.style';

const CurrentQuestion = () => (
  <View>
    <View style={specificStyle.subtitleContainer}>
      <Text style={style.subtitleText}>Question numéro</Text>
      <MaterialCommunityIcons
        name="numeric-1"
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

    <View style={style.paragraphContainer}>
      <Text>
        Voici la question courante.
      </Text>
    </View>
  </View>
);

export default CurrentQuestion;
