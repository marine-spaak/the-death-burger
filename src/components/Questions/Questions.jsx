import { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { Link, useRouter } from 'expo-router';

import style from './Questions.style';
import { images, COLORS, SIZES } from '../../constants';

import { ProgressBar, CurrentQuestion } from '..';

const Questions = () => {
  const router = useRouter();
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const handlePressOnNextBtn = () => {
    if (currentQuestionId < 9) {
      setCurrentQuestionId(currentQuestionId + 1);
    }
  };

  const handlePressOnAnswersBtn = () => {
    router.push('/answer');
  };

  return (
    <View>
      <View style={style.titleContainer}>
        <Image
          source={images.logo}
          style={style.titleLogo}
        />
        <Text style={style.titleText}>Le Burger de la Mort</Text>
      </View>

      <ProgressBar
        currentQuestionId={currentQuestionId}
      />

      <CurrentQuestion
        currentQuestionId={currentQuestionId}
      />

      {(currentQuestionId < 9) && (
        <TouchableOpacity
          onPress={handlePressOnNextBtn}
          style={style.btnContainer}
        >
          <Text style={style.nextBtn}>Question suivante</Text>
        </TouchableOpacity>
      )}

      {(currentQuestionId >= 9) && (
        <TouchableOpacity
          onPress={handlePressOnAnswersBtn}
          style={style.btnContainer}
        >
          <Text style={style.answerBtn}>C'est à vous !</Text>
        </TouchableOpacity>
      )}

    </View>
  );
};

export default Questions;
