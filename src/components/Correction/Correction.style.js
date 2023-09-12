import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../constants';

const style = StyleSheet.create({
  listContainer: {
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },

  questionAndNumericContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    backgroundColor: COLORS.lightYellow,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },

  questionAndAnswerContainer: {
    paddingBottom: 20,
  },

  question: {
    fontSize: SIZES.medium,
    width: '80%',
    paddingLeft: 10,
  },

  answer: {
    padding: 10,
  },

  answersContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  wrongOrRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  btn: {
    width: 150,
    textAlign: 'center',
    backgroundColor: COLORS.darkBlue,
    color: COLORS.white,
    padding: 10,
    marginTop: 25,
  },
});

export default style;
