import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CatagoriesScreen';
import ItemList from '../screens/ItemsScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import PostItemScreen from '../screens/PostItemScreen';
import CartScreen from '../screens/CartScreen';
import ImgCapture from '../components/ImgCapture';

const BottomTabNav = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const AddPostStackNav = () => {
  return (
    <Stack.Navigator initialRouteName="PostItem">
      <Stack.Screen
        name="PostItem"
        component={PostItemScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ImgCapture"
        component={ImgCapture}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const FleaMarketStackNav = () => {
  return (
    <Stack.Navigator initialRouteName="CatagoryList">
      <Stack.Screen
        name="CatagoryList"
        component={CategoriesScreen}
        options={{
          headerTitle: 'Catagory List',
        }}
      />
      <Stack.Screen
        name="ItemList"
        component={ItemList}
        options={{
          headerTitle: 'Item List',
        }}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={{
          headerTitle: 'Item Detail',
        }}
      />
    </Stack.Navigator>
  );
};

function FleaMarketBottomTabs() {
  return (
    <NavigationContainer>
      <BottomTabNav.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Catagories') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Add') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'ios-cart-sharp' : 'ios-cart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <BottomTabNav.Screen name="Catagories" component={FleaMarketStackNav} />
        <BottomTabNav.Screen name="Add" component={AddPostStackNav} />
        <BottomTabNav.Screen name="Cart" component={CartScreen} />
      </BottomTabNav.Navigator>
    </NavigationContainer>
  );
}

export default FleaMarketBottomTabs;
