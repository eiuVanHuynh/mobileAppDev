import { View } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Text, Button } from "react-native-paper";
import { styles } from "../style";

export default function ProductDetailScreen() {
  const [data, setData] = useState({});

  const filePath = "https://dummyjson.com/products/2";

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((d) => {
        setData(d);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.safeArea}>
        <Card style={styles.searchCard}>
          <Card.Title title="Product Detail" />

          <Card.Cover
            source={{ uri: data.thumbnail }}
            style={styles.searchImage}
          />

          <Card.Content>
            <Text style={styles.headerTitle}>Title: {data.title}</Text>

            <Text style={styles.infoLine}>
              Description: {data.description}
            </Text>

            <Text style={styles.infoLine}>
              Price: ${data.price}
            </Text>

            <Text style={[styles.infoLine, styles.discountText]}>
              Discount: {data.discountPercentage}%
            </Text>

            <Text style={styles.infoLine}>
              Rating: {data.rating}
            </Text>

            <Text style={styles.infoLine}>
              Stock: {data.stock}
            </Text>

            <Text style={styles.infoLine}>
              Brand: {data.brand}
            </Text>

            <Text style={styles.infoLine}>
              Category: {data.category}
            </Text>
          </Card.Content>

          <Card.Actions>
            <Button mode="contained">Delete</Button>
            <Button mode="contained">Cancel</Button>
          </Card.Actions>
        </Card>
      </View>
    </SafeAreaView>
  );
}