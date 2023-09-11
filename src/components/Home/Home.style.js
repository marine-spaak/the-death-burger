import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../constants';

const style = StyleSheet.create({
  titleContainer: {
    width: '100%',
    marginBottom: 25,
    alignItems: 'center',
  },

  titleText: {
    fontSize: SIZES.large,
    color: COLORS.darkestGray,
  },

  titleLogo: {
    width: 100,
    height: 100,
  },
});

export default style;
