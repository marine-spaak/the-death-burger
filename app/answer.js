import { SafeAreaView, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';

import {
  HeaderLeft, HeaderRight, Answers, Correction,
} from '../src/components';

import { COLORS } from '../src/constants';

const answer = () => {
  const router = useRouter();
  const backFunction = () => { router.back(); };
  const [gameStep, setGameStep] = useState('');
  const [answersArray, setAnswersArray] = useState(['', '', '', '', '', '', '', '', '', '']);

  return (
    <SafeAreaView>

      {/* C'est ici que je définis les propriétés du screen */}
      <Stack.Screen
        options={{
          headerTitle: '', // Ceci par ex supprime le titre dans le header
          headerShadowVisible: false, // Ceci supprime l'ombre sous le header
          headerStyle: { backgroundColor: COLORS.lightGray },
          headerLeft: () => (<HeaderLeft backFunction={backFunction} />
          ),
          headerRight: () => (<HeaderRight />),
        }}
      />

      <ScrollView>
        {/* Si on est à l'étape basique de montrer les réponses */}
        {(gameStep === '') && (
          <Answers
            answersArray={answersArray}
            setAnswersArray={setAnswersArray}
            setGameStep={setGameStep}
          />
        )}

        {/* Si on est à la correction */}
        {(gameStep === 'correction') && (
          <Correction
            answersArray={answersArray}
            setGameStep={setGameStep}
          />
        )}

        {/* Si on est au résultat */}
        {/* {(gameStep === 'result') && (
          <Result />
        )} */}

      </ScrollView>
    </SafeAreaView>
  );
};

export default answer;
