import { View, Text } from 'react-native';
import { images, COLORS, SIZES } from '../../../../constants';

import style from '../../Home.style';
import specificStyle from '../Others.style';

const OthersCard = () => (
  <View style={specificStyle.cardContainer}>
    <View style={specificStyle.cardTitleContainer}>

      <Text style={specificStyle.cardTitleText}>Une épreuve</Text>
    </View>

    <View style={style.paragraphContainer}>
      <Text style={specificStyle.cardParagraphText}>
        Descriptif
      </Text>
    </View>
  </View>
);

export default OthersCard;
