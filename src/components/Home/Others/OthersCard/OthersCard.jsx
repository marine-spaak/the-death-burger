import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { images, COLORS, SIZES } from '../../../../constants';

import style from '../../Home.style';
import specificStyle from '../Others.style';

const OthersCard = ({ title, content, imageSrc }) => (
  <View style={specificStyle.cardContainer}>
    <View>
      <Text style={specificStyle.cardTitleText}>{title}</Text>
    </View>

    <Image
      style={specificStyle.cardImage}
      source={imageSrc}
    />

    <View style={style.paragraphContainer}>
      <Text style={specificStyle.cardParagraphText}>
        {content}
      </Text>
    </View>

  </View>
);

OthersCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageSrc: PropTypes.any.isRequired,
};

export default OthersCard;
