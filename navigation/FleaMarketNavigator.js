import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CatagoryList from '../screens/CatagoryList';
import ItemList from '../screens/ItemList';

const Stack = createNativeStackNavigator();
const FleaMarketStackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CatagoryList">
        <Stack.Screen name="CatagoryList" component={CatagoryList} />
        <Stack.Screen
          name="ItemList"
          component={ItemList}
          options={{
            headerTitle: 'Item List',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default FleaMarketStackNav;
