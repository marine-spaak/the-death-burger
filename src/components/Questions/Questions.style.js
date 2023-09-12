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
    marginTop: 30,
    width: 100,
    height: 100,
  },

  backBtnContainer: {
    flex: 1,
    alignItems: 'center',
  },

  backBtn: {
    width: 100,
    textAlign: 'center',
    backgroundColor: COLORS.darkBlue,
    color: COLORS.lightBlue,
    padding: 10,
  },
});

export default style;
