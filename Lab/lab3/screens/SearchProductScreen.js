import { View, TextInput, Button, FlatList } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Text } from "react-native-paper";
import { styles } from "../style";

export default function ProductSearchScreen() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const searchProduct = () => {
    let filePath = "https://dummyjson.com/products";

    if (value !== "") {
      filePath = "https://dummyjson.com/products/search?q=" + value;
    }

    fetch(filePath)
      .then((response) => response.json())
      .then((d) => setData(d.products));
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        <Text style={styles.searchTitle}>Search Products</Text>

       <TextInput
          placeholder="Enter key word"
          value={value}
          onChangeText={setValue}
        />
        <Button
          title="SEARCH"
          onPress={searchProduct}
          color="#1E90FF"
        />

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}

          renderItem={({ item }) => (
            <Card style={styles.searchCard}>
              <Card.Title title="Product Detail" />

              <Card.Cover
                  source={{ uri: item.thumbnail }}
                  style={styles.searchImage}
              />

              <Card.Content>
                <Text style={styles.headerTitle}>{item.title}</Text>
                <Text style={styles.infoLine}>
                  Description: {item.description}
                </Text>

                <Text style={styles.infoLine}>
                  Price: ${item.price}
                </Text>

                <Text
                  style={[styles.infoLine, styles.discountText]}
                >
                  Discount: {item.discountPercentage}%
                </Text>

                <Text style={styles.infoLine}>
                  Rating: {item.rating}
                </Text>

                <Text style={styles.infoLine}>
                  Stock: {item.stock}
                </Text>

                <Text style={styles.infoLine}>
                  Brand: {item.brand}
                </Text>

                <Text style={styles.infoLine}>
                  Category: {item.category}
                </Text>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </SafeAreaView>
  );
}