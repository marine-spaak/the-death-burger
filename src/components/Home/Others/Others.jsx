import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { images, COLORS, SIZES } from '../../../constants';

import { OthersCard } from '../../../components';

import style from '../Home.style';
import specificStyle from './Others.style';

const Others = () => (
  <View>
    <View style={style.subtitleContainer}>
      <Entypo
        name="add-to-list"
        size={32}
        color={COLORS.lightBlue}
        style={style.icon}
      />
      <Text style={style.subtitleText}>Les autres épreuves</Text>
    </View>

    <View style={style.paragraphContainer}>
      <Text>
        Voici une liste des autres épreuves.
      </Text>
      <OthersCard />
      <OthersCard />
    </View>
  </View>
);

export default Others;
