import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { Link, useRouter } from 'expo-router';

import style from './Questions.style';
import { images, COLORS, SIZES } from '../../constants';

import { ProgressBar, CurrentQuestion } from '..';

const Questions = () => {
  const router = useRouter();

  return (
    <View>
      <View style={style.titleContainer}>
        <Image
          source={images.logo}
          style={style.titleLogo}
        />
        <Text style={style.titleText}>Le Burger de la Mort</Text>
      </View>

      <ProgressBar />

      <CurrentQuestion />

      <TouchableOpacity
        onPress={() => {}}
        style={style.btnContainer}
      >
        <Text style={style.nextBtn}>Question suivante</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Questions;
