import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../constants';

const style = StyleSheet.create({
  titleContainer: {
    width: '100%',
    marginBottom: 25,
    alignItems: 'center',
  },

  titleText: {
    fontSize: SIZES.xLarge,
    color: COLORS.darkestGray,
  },

  titleLogo: {
    width: 100,
    height: 100,
  },

  subtitleContainer: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  subtitleText: {
    fontSize: SIZES.large,
    color: COLORS.darkestGray,
  },

  paragraphContainer: {
    width: '100%',
    padding: 10,
    marginBottom: 25,
  },

  icon: {
    marginRight: 10,
  },
});

export default style;
