import {
  View, Text, Image, TouchableOpacity, FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';

import { Answer } from '..';
import answersData from '../../assets/data/answersData';

import style from '../Questions/Questions.style';
import specificStyle from './Answers.style';
import { images } from '../../constants';

const Questions = () => {
  const router = useRouter();

  return (
    <View style={specificStyle.answersContainer}>
      <View style={style.titleContainer}>
        <Image
          source={images.logo}
          style={style.titleLogo}
        />
        <Text style={style.titleText}>Les Réponses de la Mort</Text>
      </View>

      <FlatList
        data={answersData}
        scrollEnabled={false} // pour éviter le souci d'une FlatList dans une ScrollView
        renderItem={({ item }) => (
          <Answer
            id={item.id}
            answerColor={item.answerColor}
          />
        )}
      />

      <TouchableOpacity
        onPress={() => {}}
        style={style.btnContainer}
      >
        <Text style={style.nextBtn}>Valider</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Questions;
