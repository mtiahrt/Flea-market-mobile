import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { FleaMarketBottomTabs } from './navigation/FleaMarketNavigator';
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
  const [isReady, setIsReady] = useState(false);
  const cacheResourcesAsync = async () => {
    const images = [require('./assets/icon.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={cacheResourcesAsync}
        onFinish={setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <PaperProvider theme={theme}>
      <CartProvider>
        <FleaMarketBottomTabs />
      </CartProvider>
    </PaperProvider>
  );
}
