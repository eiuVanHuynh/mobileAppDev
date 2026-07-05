import React, { useState } from "react";
import {  View, Text, TextInput, Button} from "react-native";
import styles from "./style"

export default function EmployeeForm() {
  
const [fullName, setFullName] = useState("");
const [age, setAge] = useState("");
const [occupation, setOccupation] = useState("");
const [message, setMessage] = useState("");
const handleUpdate = () => {
  if (
    fullName === "" ||
    age === "" ||
    occupation === ""
  ) {
    setMessage("Please fill in all information.");
    return;
  }

  setMessage("Update successfully!");
};

const [number, setNumber] = useState("");
const [result, setResult] = useState("");
const calculate = () => {
  if (number === "") {
    setResult("Please enter a number.");
    return;
  }

  const str = number.toString();

  const first = parseInt(str[0]);

  const last = parseInt(str[str.length - 1]);

  const sum = first + last;

  setResult(
    `First digit: ${first}
     Last digit: ${last}
     Sum: ${sum}`
  );
};
return (
    <View style={styles.container}>
      <Text style={styles.title}>
       Employee Information
      </Text>
      <Text> Full Name </Text>
      <TextInput style={styles.input} placeholder="Enter full name" value={fullName} onChangeText={setFullName} />
      <Text> Age </Text>
      <TextInput style={styles.input} placeholder="Enter your age" keyboardType="numeric" value={age} onChangeText={setAge}  />
      <Text> Occupation </Text>
      <TextInput style={styles.input} placeholder="Enter your occupation"  value={occupation} onChangeText={setOccupation}  />
      <Button  title="Update" onPress={handleUpdate} />
      <Text style={styles.message}>{message}</Text>
      <View style={{ marginTop: 40 }}>
        <Text style={styles.title}> Sum First and Last Digit </Text>
        <Text>Number</Text>
        <TextInput style={styles.input} placeholder="Enter a number" keyboardType="numeric" value={number} onChangeText={setNumber} />
        <Button title="Calculate" onPress={calculate} />
        <Text style={styles.message}> {result} </Text>
      </View>
   </View>
);
}
