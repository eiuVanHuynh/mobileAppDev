import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import ProductListScreen from "./screens/ProductListScreen";
import AddProductScreen from "./screens/AddProductScreen";
import SearchProductScreen from "./screens/SearchProductScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";


export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { 
      key: 'products', 
      title: 'Products', 
      focusedIcon: 'shopping',          
      unfocusedIcon: 'shopping-outline' 
    },
    { 
      key: 'add', 
      title: 'Add', 
      focusedIcon: 'plus-circle', 
      unfocusedIcon: 'plus-circle-outline' 
    },
    { 
      key: 'search', 
      title: 'Search', 
      focusedIcon: 'magnify-plus', 
      unfocusedIcon: 'magnify' 
    },
    { 
      key: 'detail', 
      title: 'Detail', 
      focusedIcon: 'information',     
      unfocusedIcon: 'information-outline' 
    },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    products: ProductListScreen,
    add: AddProductScreen,
    search: SearchProductScreen,
    detail: ProductDetailScreen,
  });
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}   
        />
      </SafeAreaProvider>
    </PaperProvider>
   
  );
}
