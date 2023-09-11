import { View, Text, Image } from 'react-native';
import style from './Home.style'; // Je garde le style de Home pour l'utiliser dans chaque sous-partie
import { images, COLORS, SIZES } from '../../constants';

import { Rules } from '../../components';

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
  </View>
);

export default Home;
