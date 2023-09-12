import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

import style from '../Questions/Questions.style';
import { images, COLORS, SIZES } from '../../constants';

const Questions = () => {
  const router = useRouter();

  return (
    <View>
      <View style={style.titleContainer}>
        <Image
          source={images.logo}
          style={style.titleLogo}
        />
        <Text style={style.titleText}>Les Réponses de la Mort</Text>
      </View>

      <TouchableOpacity
        onPress={() => {}}
        style={style.btnContainer}
      >
        <Text style={style.nextBtn}>Suite</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Questions;
