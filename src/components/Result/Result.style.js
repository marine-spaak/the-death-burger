import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../constants';

const style = StyleSheet.create({
  resultText: {
    fontSize: SIZES.xLarge,
    backgroundColor: COLORS.lightRed,
    color: COLORS.darkRed,
    textAlign: 'center',
    margin: 40,
    padding: 20,
  },
});

export default style;
