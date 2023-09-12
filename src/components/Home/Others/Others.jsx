import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { images, COLORS, SIZES } from '../../../constants';

import { OthersCard } from '../../../components';

import style from '../Home.style';
import specificStyle from './Others.style';

import othersData from '../../../assets/data/othersData';

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
        Y a pas que le burger de la mort, dans la vie...
      </Text>

      <FlatList
        data={othersData}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <OthersCard
              title={item.title}
              content={item.content}
              imageSrc={item.imageSrc}
            />
          </TouchableOpacity>
        )}
        horizontal // Il suffit de ça pour passer la liste à l'horizontale
      />
    </View>
  </View>
);

export default Others;
