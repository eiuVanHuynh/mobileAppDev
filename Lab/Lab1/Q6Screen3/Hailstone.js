import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./style";
export default () =>{
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const generateSequence = () => {
  if (number === "") {
    setResult("Please enter a number.");
    return;
  }

  let n = Number(number);

  if (n <= 0) {
    setResult("Please enter a positive integer.");
    return;
  }

  let sequence = "";

  while (n !== 1) {
    sequence += n + "\n";

    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }

  sequence += "1";

  setResult(sequence);
};

return (
  <View style={styles.container}>
    <Text style={styles.title}> Hailstone Sequence </Text>
    <Text>Enter a positive integer</Text>
    <TextInput  style={styles.input}  placeholder="Enter a number"  keyboardType="numeric" value={number}  onChangeText={setNumber} />
    <Button title="Generate" onPress={generateSequence}  />
    <Text style={styles.message}> {result} </Text>
  </View>
);

}