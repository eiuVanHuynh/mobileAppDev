import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./style";

export default function AssetExample() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [result, setResult] = useState("");
  const findMinimum = () => {
  if (number1 === "" || number2 === "" || number3 === "") {
    setResult("Please enter all three numbers.");
    return;
  }
  const min = Math.min(
    Number(number1),
    Number(number2),
    Number(number3)
  );

  setResult(`Minimum = ${min}`);
};
  return (
  <View style={styles.container}>

    <Text style={styles.title}>  Find Minimum of Three Numbers </Text>

    <Text>Number 1</Text>

    <TextInput style={styles.input} placeholder="Enter first number" keyboardType="numeric" value={number1} onChangeText={setNumber1} />

    <Text>Number 2</Text>

    <TextInput style={styles.input} placeholder="Enter second number" keyboardType="numeric" value={number2} onChangeText={setNumber2} />

    <Text>Number 3</Text>

    <TextInput style={styles.input} placeholder="Enter third number" keyboardType="numeric" value={number3} onChangeText={setNumber3} />

    <Button title="Find Minimum" onPress={findMinimum} />

    <Text style={styles.message}> {result} </Text>
  </View>
);
}