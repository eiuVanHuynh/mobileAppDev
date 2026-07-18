import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from '../components/productCard';
import {styles} from '../style';

export default function ProductListScreen({navigation}){
    const [data,setData]= useState([]);
    const [loading, setLoading] = useState(true);
    const filePath ='https://dummyjson.com/products/';

    useEffect(() => {
      fetch(filePath)
        .then((response) => {
            if (!response.ok){
              throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((d) => {
            console.log("DỮ LIỆU SẢN PHẨM MẪU:", d.products[0]);
            setData(d.products);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data:',error);
            setLoading(false);
        });
    },[]);

    if (loading) {
      return(
          <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#2196f3" />
          </View>
      );
    }
    return(
      <View style={styles.screenContainer}> 
          <SafeAreaView edges={['top']}>
            <Text style={styles.headerTitle}>Product List</Text>
          </SafeAreaView>
          <FlatList style={styles.contentContainer} data={data} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
            <ProductCard 
              item={item} 
              onDetail={() => {
                console.log("Xem chi tiết:", item.id);
              }} 
              onAdd={() => {               
                console.log("Thêm sản phẩm:", item.id); 
              }} 
              onDelete={() => {
                console.log("Xóa sản phẩm:", item.id);
              }} 
            /> 
          )} />
      </View>    
      
    )
}