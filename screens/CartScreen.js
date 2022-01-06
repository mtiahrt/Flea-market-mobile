import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CART, ITEMSDETAILS } from '../data/dummy-data';
import { t } from 'react-native-tailwindcss';
import Button from '../components/Button';

export default function CartScreen() {
  const cartItemIds = CART.map(x => x.itemId);
  const itemDetail = ITEMSDETAILS.filter(x => cartItemIds.includes(x.itemId));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {itemDetail.map(item => {
        return (
          <View style={styles.cartContainer} key={item.id}>
            <Image
              style={{ width: '50%', height: 120 }}
              source={{
                url: item.photos[0],
              }}
            ></Image>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
        );
      })}
      <Button label="Checkout"></Button>
    </View>
  );
}
const styles = {
  container: [t.flex1, t.mT10, t.p6, t.bgGray200],
  cartContainer: [t.flexCol, t.flex2, t.bgPink900],
  title: [t.textBlue800, t.textCenter, t.fontBold, t.mB5, t.textXl],
  itemImage: [t.w50, t.h100],
};
