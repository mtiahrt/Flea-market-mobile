import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ItemList from '../screens/ItemsScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import PostItemScreen from '../screens/PostItemScreen';
import CartScreen from '../screens/CartScreen';
import ImgCapture from '../components/ImgCapture';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import ContactSupport from '../screens/ContactSupport';

const BottomTabNav = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
const FleaMarketStackNav = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Category List"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Ionicons onPress={() => navigation.openDrawer()} name='menu' size={25} color='gray'  />
          ),
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

export function FleaMarketDrawerNav() {
  return (
    <Drawer.Navigator id='leftDrawer'
      initialRouteName="Categories"
      screenOptions={({navigation}) => ({
        headerShown: false,
        drawerStyle: {
          width: 200,
        },
        headerLeft: () => {
            return < Ionicons onPress = {() => navigation.openDrawer()} name='menu' size={25} color='gray'  />
      }
      })}
    >
      <Drawer.Screen
        options={{
          drawerActiveTintColor: 'tomato',
          headerTransparent: true,
          headerTitle: '',
        }}
        name="Home"
        component={FleaMarketStackNav}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={{ headerShown: true, drawerActiveTintColor: 'tomato' }}
      />
      <Drawer.Screen
        name="Contact Support"
        component={ContactSupport}
        options={{ headerShown: true, drawerActiveTintColor: 'tomato' }}
      />
    </Drawer.Navigator>
  );
}

export function FleaMarketBottomTabs({navigation}) {
  return (
    <NavigationContainer>
      <BottomTabNav.Navigator id='bottomTabNav'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Categories') {
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
        <BottomTabNav.Screen name="Categories" component={FleaMarketDrawerNav} />
        <BottomTabNav.Screen name="Add" component={AddPostStackNav} />
        <BottomTabNav.Screen name="Cart" component={CartScreen} />
      </BottomTabNav.Navigator>
    </NavigationContainer>
  );
}
