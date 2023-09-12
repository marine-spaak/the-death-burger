import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../constants';

const style = StyleSheet.create({
  answersContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  eachAnswerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  input: {
    width: '75%',
    padding: 5,
    fontSize: SIZES.medium,
    backgroundColor: COLORS.darkestGray,
    color: COLORS.white,
  },
});

export default style;
