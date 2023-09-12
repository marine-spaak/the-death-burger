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

      <TouchableOpacity
        onPress={handlePressOnNextBtn}
        style={style.btnContainer}
      >
        <Text style={style.nextBtn}>Question suivante</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Questions;
