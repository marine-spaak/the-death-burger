import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

const style = StyleSheet.create({

  alainContainer: {
    alignSelf: 'flex-start',
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
  },

  alainPicture: {
    width: 160,
    height: 160,
  },

  alainText: {
    flex: 1,
    paddingLeft: 20,
  },

  alainParagraph: {
    marginBottom: 10,
  },

  alainContactBtn: {
    backgroundColor: COLORS.darkBlue,
    borderRadius: 5,
  },

  alainContactText: {
    textAlign: 'center',
    color: COLORS.white,
    padding: 5,
  },

});

export default style;
