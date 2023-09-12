import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { Link, useRouter } from 'expo-router';

import style from './Questions.style';
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
        <Text style={style.titleText}>Les Questions</Text>
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        style={style.backBtnContainer}
      >
        <Text style={style.backBtn}>Retour à l'accueil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Questions;
