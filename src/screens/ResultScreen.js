import React from 'react';
import { View, Text, Button } from 'react-native';

const ResultScreen = ({ navigation }) => {
  const score = navigation.getParam('score', 0);

  return (
    <View>
      <Text>Your Score: {score}</Text>
      <Button
        title="Play Again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default ResultScreen;
