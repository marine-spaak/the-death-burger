import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

const style = StyleSheet.create({
  progressBarContainer: {
    width: '80%',
    height: 10,
    backgroundColor: COLORS.darkGray,
  },

  progressBarFiller: {
    width: '50%',
    height: 10,
    backgroundColor: COLORS.darkYellow,
  },
});

export default style;
