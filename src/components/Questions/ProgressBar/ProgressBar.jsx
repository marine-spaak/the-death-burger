import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { images, COLORS, SIZES } from '../../../constants';

import style from '../Questions.style';
import specificStyle from '../ProgressBar/ProgressBar.style';

const ProgressBar = ({ currentQuestionId }) => (
  <View>
    <View style={style.paragraphContainer}>
      <View style={specificStyle.progressBarContainer}>
        {/* J'ai un style générique pour le remplissage de la bar (progressBarFiller) */}
        {/* Mais je renseigne la largeur en % selon à quelle question j'en suis rendue */}
        <View style={[specificStyle.progressBarFiller, { width: `${(currentQuestionId + 1) * 10}%` }]} />
      </View>
    </View>
  </View>
);

ProgressBar.propTypes = {
  currentQuestionId: PropTypes.number.isRequired,
};

export default ProgressBar;
