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

  btnContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },

  nextBtn: {
    width: 150,
    textAlign: 'center',
    backgroundColor: COLORS.darkBlue,
    color: COLORS.lightBlue,
    padding: 10,
    marginTop: 25,
  },

  answerBtn: {
    width: 150,
    textAlign: 'center',
    backgroundColor: COLORS.darkRed,
    color: COLORS.lightRed,
    padding: 10,
    marginTop: 25,
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
