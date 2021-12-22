import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CatagoryList from '../screens/CatagoryList';
import ItemList from '../screens/ItemList';
import PostItem from '../screens/PostItem';

const BottomTabNav = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const FleaMarketStackNav = () => {
  return (
    <Stack.Navigator initialRouteName="CatagoryList">
      <Stack.Screen
        name="CatagoryList"
        component={CatagoryList}
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
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <BottomTabNav.Screen name="Catagories" component={FleaMarketStackNav} />
        <BottomTabNav.Screen name="Add" component={PostItem} />
      </BottomTabNav.Navigator>
    </NavigationContainer>
  );
}

export default FleaMarketBottomTabs;
