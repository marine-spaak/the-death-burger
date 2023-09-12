import {
  View, Text, Image, TouchableOpacity, FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import PropTypes from 'prop-types';

import questionsData from '../../assets/data/questionsData';

const Correction = ({ answersArray, setGameStep }) => {
  const router = useRouter();

  return (
    <View>
      <FlatList
        data={questionsData}
        scrollEnabled={false} // pour éviter le souci d'une FlatList dans une ScrollView
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <Text>{answersArray[item.id - 1]}</Text>
          </View>

        )}
      />

      <TouchableOpacity
        onPress={() => { setGameStep('result'); }}
      >
        <Text>Voir le résultat</Text>
      </TouchableOpacity>

    </View>
  );
};

Correction.propTypes = {
  answersArray: PropTypes.array.isRequired,
  setGameStep: PropTypes.func.isRequired,
};

export default Correction;
