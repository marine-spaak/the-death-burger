import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

const style = StyleSheet.create({

  playBtn: {
    alignSelf: 'center',
    marginTop: 5,
  },

  cardContainer: {
    maxWidth: 150,
    maxHeight: 220,
    backgroundColor: COLORS.lightGray,
    margin: 10,
    marginLeft: 0,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardTitleText: {
    textAlign: 'center',
    margin: 10,
  },

  cardParagraphText: {
    textAlign: 'center',
  },

  cardImage: {
    maxWidth: 90,
    maxHeight: 90,
  },
});

export default style;
