import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>Open dota App</Text>
      <TextInput
        placeholder={'Search for a Player'}
        returnKeyType={'search'}
        autoCorrect={false}
      />
    </View>
  );
};

export default Home;

