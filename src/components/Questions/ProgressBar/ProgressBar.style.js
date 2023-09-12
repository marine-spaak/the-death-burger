import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

const style = StyleSheet.create({
  progressBarContainer: {
    marginTop: 20,
    width: '80%',
    height: 10,
    backgroundColor: COLORS.darkGray,
  },

  progressBarFiller: {
    width: '100%',
    height: 10,
    backgroundColor: COLORS.darkYellow,
  },
});

export default style;
