import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from '../Home.style';

const Rules = () => (
  <View>
    <View style={style.subtitleContainer}>
      <Ionicons
        name="heart"
        size={32}
        color="red"
        style={style.icon}
      />
      <Text style={style.subtitleText}>Règles du jeu</Text>
    </View>

    <View style={style.paragraphContainer}>
      <Text>
        L'application va vous poser dix questions très sérieuses.
        Retenez toutes les réponses. Restituez-les à la fin, dans le bon ordre.
      </Text>
    </View>
  </View>
);

export default Rules;