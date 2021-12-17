import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatagoryList from '../screens/CatagoryList';
import ItemList from '../screens/ItemList';

const Stack = createNativeStackNavigator();

function FleaMarketStackNav() {
  return (
    <Stack.Navigator initialRouteName="CatagoryList">
      <Stack.Screen name="CatagoryList" component={CatagoryList} />
      <Stack.Screen name="ItemList" component={ItemList} />
    </Stack.Navigator>
  );
}
export default FleaMarketStackNav;
