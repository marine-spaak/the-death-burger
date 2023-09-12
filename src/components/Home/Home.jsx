import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';

import style from './Home.style'; // Je garde le style de Home pour l'utiliser dans chaque sous-partie
import { images, COLORS, SIZES } from '../../constants';

import {
  Rules, Play, Others, Alain,
} from '../../components';

const Home = () => (
  <View>
    <View style={style.titleContainer}>
      <Image
        source={images.logo}
        style={style.titleLogo}
      />
      <Text style={style.titleText}>Le burger de la mort</Text>
    </View>

    <Rules />
    <Play />
    <Others />
    <Alain />

    <Link href="/test">Test</Link>
  </View>
);

export default Home;
