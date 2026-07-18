import React from "react";
import {View, Text, Image} from "react-native";
import {styles} from '../style';

export default function ProductItem({ item}){
   const ProductItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.sectionTitle}>Product Detail</Text>
      <Image 
        source={{ uri: item.thumbnail || 'https://placeholder.com' }} 
        style={styles.productImage} 
        resizeMode="cover"
      />
  return(
      <View style={styles.infoContainer}>
        <Text style={styles.productTitle}>Title: {item.title}</Text>
        <Text style={styles.productDesc}>Description: {item.description}</Text>
        <Text style={styles.productText}>Price: ${item.price}</Text>
        <Text style={styles.productText}>Discount: {item.discountPercentage}%</Text>
        <Text style={styles.productText}>Rating: {item.rating} stars</Text>
        <Text style={styles.productText}>Stock: {item.stock} units</Text>
        <Text style={styles.productText}>Brand: {item.brand}</Text>
        <Text style={styles.productText}>Category: {item.category}</Text>
      </View>
    </View>
  )
}