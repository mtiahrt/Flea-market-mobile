import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, Image } from 'react-native';
import { ITEMSDETAILS } from '../data/dummy-data';
import Button from '../components/Button';
import { CartContext } from '../contexts/CartContext';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen({navigation}) {
  const cart = useContext(CartContext);
  const itemDetail = ITEMSDETAILS.filter(x =>
    cart.itemDetailIds.includes(x.itemId)
  );
  const removeItem = id => {
    cart.setItemDetailIds(cart.itemDetailIds.filter(x => x !== id));
  };

  const handleOnPress = itemId => {
    navigation.navigate('ItemDetailScreen', {
      itemId: itemId
    })
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {itemDetail &&
        itemDetail.map(item => {
          return (
            <>
              <TouchableOpacity onPress={() => handleOnPress(item.itemId)} style={styles.cardContainer} key={item.id}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.thumbPhoto,
                  }}
                />
                <Text style={styles.itemText}>{item.title}</Text>
                <Text style={styles.priceText}>{item.price}</Text>
              </TouchableOpacity>
              <View>
                <Ionicons
                  onPress={() => removeItem(item.itemId)}
                  style={styles.closeButton}
                  name="close"
                  size={24}
                  color="black"
                />
              </View>

            </>
          );
        })}
      <Button
        disabled={cart.itemDetailIds.length === 0}
        label="Checkout"
      />
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
    backgroundColor: 'lightgray',
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
    marginLeft: 10,
    marginTop: 10,
    flexShrink: 1,
  },
  priceText: {
    marginRight: 5,
    marginLeft: 'auto',
    fontWeight: '800',
    marginTop: 10,
  },
  closeButton: {
    padding: 10,
  },
  image: {
    width: '30%',
    height: 120,
  },
});
