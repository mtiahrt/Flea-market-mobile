import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { CART, ITEMSDETAILS } from '../data/dummy-data';
import Button from '../components/Button';

export default function CartScreen() {
  const cartItemIds = CART.map(x => x.itemId);
  const itemDetail = ITEMSDETAILS.filter(x => cartItemIds.includes(x.itemId));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {itemDetail.map(item => {
        return (
          <View style={styles.cardContainer} key={item.id}>
            <Image
              style={styles.image}
              source={{
                url: item.photos[0],
              }}
            ></Image>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.priceText}>{item.price}</Text>
          </View>
        );
      })}
      <Button label="Checkout"></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    height: 40,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 30,
    marginTop: 5,
    marginBottom: 5,
    width: '100%',
  },
  itemText: {
    flexShrink: 1,
    marginLeft: 10,
  },
  priceText: {
    fontWeight: '800',
  },
  image: {
    backgroundColor: 'yellow',
    width: '30%',
    height: 120,
  },
});
