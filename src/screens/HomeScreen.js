import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Quiz App!</Text>
      <Button
        title="Start Quiz"
        onPress={() => navigation.navigate('Quiz')}
      />
    </View>
  );
};

export default HomeScreen;
