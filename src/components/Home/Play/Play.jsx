import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { images, COLORS, SIZES } from '../../../constants';

import style from '../Home.style';
import specificStyle from './Play.style';

const Play = () => (
  <View>
    <View style={style.subtitleContainer}>
      <Ionicons
        name="game-controller"
        size={32}
        color={COLORS.lightYellow}
        style={style.icon}
      />
      <Text style={style.subtitleText}>Jouer</Text>
    </View>

    <View style={style.paragraphContainer}>
      <Text>
        Vous êtes prêt·e ? Vraiment ?
        Alors allez-y !
      </Text>

      <TouchableOpacity
        onPress={() => {}}
      >
        <Ionicons
          name="play-circle"
          size={70}
          color={COLORS.darkYellow}
          style={specificStyle.playBtn}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default Play;
