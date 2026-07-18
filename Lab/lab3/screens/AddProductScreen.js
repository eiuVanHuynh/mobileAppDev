import { useState } from 'react';
import { Text, Alert, ScrollView, TextInput, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from '../style';

export default function AddProductScreen(){
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');
  const [discountPercentage,setDiscountPercentage] = useState('');
  const [rating,setRating] = useState('');
  const [stock,setStock] = useState('');
  const [brand,setBrand] = useState('');
  const [category,setCategory] = useState('');
  const [images,setImages] = useState('');

  const handleSubmit = () =>{
    fetch('https://dummyjson.com/products/add',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
    .then((res) => res.json())
    .then(console.log);
  Alert.alert("Add successfull")
  };
  return(
    <SafeAreaView style={styles.screenContainer}>   
      <Text style={styles.addHeaderTitle}>Add a product</Text>
      <Text style={styles.boldLabel}>Title</Text>
      <TextInput style={styles.infoLine} placeholder="Enter title"/>
      <Text style={styles.boldLabel}>Description</Text>
      <TextInput style={styles.infoLine} placeholder="Enter description"/>
      <Text style={styles.boldLabel}>Price</Text>
      <TextInput style={styles.infoLine} placeholder="Enter price"/>
      <Text style={styles.boldLabel}>Discount Percentage</Text>
      <TextInput style={styles.infoLine} placeholder="Enter discount percentage"/>
      <Text style={styles.boldLabel}>Rating</Text>
      <TextInput style={styles.infoLine} placeholder="Enter rating"/>
      <Text style={styles.boldLabel}>Stock</Text>
      <TextInput style={styles.infoLine} placeholder="Enter stock"/>
      <Text style={styles.boldLabel}>Brand</Text>
      <TextInput style={styles.infoLine} placeholder="Enter brand"/>
      <Text style={styles.boldLabel}>Category</Text>
      <TextInput style={styles.infoLine} placeholder="Enter category"/>
      <Text style={styles.boldLabel}>Images</Text>
      <TextInput style={styles.infoLine} placeholder="Enter images URL(s)"/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}