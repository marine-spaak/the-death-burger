import {
  View, Text, TouchableOpacity, FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import PropTypes from 'prop-types';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import questionsData from '../../assets/data/questionsData';

import style from './Correction.style';
import { COLORS } from '../../constants';

const Correction = ({ answersArray, setGameStep, counterPlusOne }) => {
  const router = useRouter();

  return (
    <View>
      <FlatList
        style={style.listContainer}
        data={questionsData}
        scrollEnabled={false} // pour éviter le souci d'une FlatList dans une ScrollView
        renderItem={({ item }) => (
          <View style={style.questionAndAnswerContainer}>
            <View style={style.questionAndNumericContainer}>
              <MaterialCommunityIcons
                name={`numeric-${item.id}`}
                size={50}
                color={COLORS.darkRed}
              />
              <Text style={style.question}>{item.text}</Text>
            </View>
            <View style={style.answersContainer}>
              <Text style={style.answer}>{answersArray[item.id - 1]}</Text>

              <View style={style.wrongOrRight}>
                <TouchableOpacity onPress={() => counterPlusOne()}>
                  <AntDesign
                    name="checkcircle"
                    size={30}
                    color="mediumseagreen"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Entypo
                    name="circle-with-cross"
                    size={35}
                    color="tomato"
                  />
                </TouchableOpacity>
              </View>

            </View>
          </View>

        )}
      />

      <TouchableOpacity
        style={style.btnContainer}
        onPress={() => { setGameStep('result'); }}
      >
        <Text style={style.btn}>Voir le résultat</Text>
      </TouchableOpacity>

    </View>
  );
};

Correction.propTypes = {
  answersArray: PropTypes.array.isRequired,
  setGameStep: PropTypes.func.isRequired,
  counterPlusOne: PropTypes.func.isRequired,
};

export default Correction;
