import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

const style = StyleSheet.create({
  subtitleContainer: {
    backgroundColor: COLORS.gray,
    padding: 10,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  questionContainer: {
    alignItems: 'center',
  },

  questionText: {
    maxWidth: '90%',
    fontSize: SIZES.medium,
    textAlign: 'center',
  },
});

export default style;
