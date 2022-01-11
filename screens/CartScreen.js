import React, { useContext } from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import { ITEMSDETAILS } from '../data/dummy-data';
import Button from '../components/Button';
import { CartContext } from '../contexts/CartContext';

export default function CartScreen() {
  const { itemDetailIds } = useContext(CartContext);
  const itemDetail = ITEMSDETAILS.filter(x => itemDetailIds.includes(x.id));
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {itemDetail &&
        itemDetail.map(item => {
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
    </ScrollView>
  );
}
// todo refactor using tailwind
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
    justifyContent: 'flex-start',
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
    marginRight: 10,
    marginLeft: 10,
    flexShrink: 1,
  },
  priceText: {
    marginLeft: 'auto',
    fontWeight: '800',
  },
  image: {
    // backgroundColor: 'lightblue',
    width: '30%',
    height: 120,
  },
});
