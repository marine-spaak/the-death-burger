import { View, Text, Image } from 'react-native';
import style from './Home.style';
import { images, COLORS, SIZES } from '../../constants';

const Home = () => (
  <View>
    <View style={style.titleContainer}>
      <Image
        source={images.logo}
        style={style.titleLogo}
      />
      <Text style={style.titleText}>Le burger de la mort</Text>
    </View>
  </View>
);

export default Home;
