import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export default () => {
  const [pressCount, setPressCount] = useState(0);
  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <Text>You've pressed the button: {pressCount} time(s)</Text>
      <Button title="Press Me" onPress={() => setPressCount(pressCount + 1)} />
    </View>
  );
};
