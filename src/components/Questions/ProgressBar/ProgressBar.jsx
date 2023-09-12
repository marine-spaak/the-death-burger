import { View, Text } from 'react-native';
import { images, COLORS, SIZES } from '../../../constants';

import style from '../Questions.style';
import specificStyle from '../ProgressBar/ProgressBar.style';

const ProgressBar = () => (
  <View>
    {/* <View style={style.subtitleContainer}>
      <Text style={style.subtitleText}>Progression</Text>
    </View> */}

    <View style={style.paragraphContainer}>
      <View style={specificStyle.progressBarContainer}>
        <View style={specificStyle.progressBarFiller} />
      </View>
    </View>
  </View>
);

export default ProgressBar;
