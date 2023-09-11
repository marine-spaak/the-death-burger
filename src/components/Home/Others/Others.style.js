import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

const style = StyleSheet.create({

  playBtn: {
    alignSelf: 'center',
    marginTop: 5,
  },

  cardContainer: {
    maxWidth: 120,
    backgroundColor: COLORS.lightGray,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
  },

  cardTitleText: {
    textAlign: 'center',
  },

  cardParagraphText: {
    textAlign: 'center',
  },
});

export default style;
