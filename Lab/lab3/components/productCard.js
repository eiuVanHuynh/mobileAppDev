import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {styles} from '../style';

export default function productCard({ item, onDetail, onAdd, onDelete
}){
  return(
    <View style={styles.cardContainer}>
        <View style={styles.leftColumn}>
            <Image source={{ uri: item.thumbnail || 'https://placeholder.com' }} style={styles.productImage} />
        </View>
        <View style={styles.rightColumn}>
            <View style={styles.infoContainer}>
                <Text style={styles.boldLabel}>Title: {item.title}</Text>
                <Text style={styles.infoLine}>Description: {item.description}</Text>
                <Text style={styles.infoLine}>Price: {item.price}</Text>
                <Text style={styles.discountText}>Discount: {item.discountPercentage} off</Text>
                <Text style={styles.infoLine}>Rating: {item.rating}</Text>
                <Text style={styles.infoLine}>Stock: {item.stock}</Text>
                <Text style={styles.infoLine}>Brand: {item.brand}</Text>
                <Text style={styles.infoLine}>Category: {item.category}</Text>
            </View>
            <View style={styles.buttonRow} >
                <TouchableOpacity style={styles.button} onPress={onDetail}>
                    <Text style={styles.buttonText}>DETAIL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onAdd}>
                    <Text style={styles.buttonText}>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onDelete}>
                    <Text style={styles.buttonText}>DELETE</Text>
                </TouchableOpacity>
            </View>
        </View>
      
    </View>
  )
}