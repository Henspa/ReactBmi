import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(0);

  function calculate() {
    const heightWithDigit = height.replace(',', '.');
    const weightWithDigit = weight.replace(',', '.');
    const result = (weightWithDigit / Math.pow(heightWithDigit, 2).toFixed(1));
    setBmi(result);
  }

  return (
    <View style={styles.container}>
      <Text>Height</Text>
      <TextInput value={String(height)} onChangeText={text => setHeight(text)}
        keyboard-type='decimal-pad'>
      </TextInput>
      <Text>Weight</Text>
      <TextInput value={String(weight)} onChangeText={text => setWeight(text)}
        keyboard-type='decimal-pad'>
      </TextInput>
      <Button onPress={calculate} title="Calculate"></Button>
      <Text>BMI: {bmi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
