import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../constants';

const style = StyleSheet.create({
  titleContainer: {
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },

  titleText: {
    fontSize: SIZES.xLarge,
    color: COLORS.darkestGray,
  },

  titleLogo: {
    marginTop: 30,
    width: 100,
    height: 100,
  },

  backBtnContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },

  backBtn: {
    width: 100,
    textAlign: 'center',
    backgroundColor: COLORS.darkBlue,
    color: COLORS.lightBlue,
    padding: 10,
    marginTop: 15,
  },

  subtitleContainer: {
    padding: 10,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    backgroundColor: COLORS.gray,
  },

  subtitleText: {
    fontSize: SIZES.large,
    color: COLORS.darkestGray,
  },

  paragraphContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
});

export default style;
