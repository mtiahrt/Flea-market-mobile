import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import FleaMarketStackNav from './navigation/FleaMarketNavigator';
import { CartProvider } from './contexts/CartContext';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <CartProvider>
        <FleaMarketStackNav />
      </CartProvider>
    </PaperProvider>
  );
}
