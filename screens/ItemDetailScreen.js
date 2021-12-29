import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { ITEMSDETAILS } from '../data/dummy-data';

export default function ItemDetail({ route, navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => (
          <Button icon={'cart'} onPress={() => {}} title="cart"></Button>
        ),
      },
      [navigation]
    );
  });
  const { itemId } = route.params;
  const itemDetail = ITEMSDETAILS.find(x => x.itemId === itemId);
  console.log('item detail is rendering');
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.itemImage} source={{ uri: itemDetail.photos[0] }} />
      <View>
        <Text>Manufacturer Name</Text>
        <Text>Item Name</Text>
        <Text>$88</Text>
      </View>
      <Text>Select a color</Text>
      <View style={[styles.colorBox, { backgroundColor: 'powderblue' }]}></View>
      <View style={[styles.colorBox, { backgroundColor: 'skyblue' }]}></View>
      <View style={[styles.colorBox, { backgroundColor: 'steelblue' }]}></View>
      <Text>Size</Text>
      <View style={styles.sizeBox}>
        <Text>XS</Text>
      </View>
      <View style={styles.sizeBox}>
        <Text>S</Text>
      </View>
      <View style={styles.sizeBox}>
        <Text>M</Text>
      </View>
      <View style={styles.sizeBox}>
        <Text>L</Text>
      </View>
      <View style={styles.sizeBox}>
        <Text>XL</Text>
      </View>
      <Button style={styles.button}>Add to Cart</Button>
      <View>
        <Text>Estimated Delivery</Text>
        <Text>{itemDetail.estimatedDelivery}</Text>
        <Text>Delivary Method</Text>
        <Text>{itemDetail.deliveryTerms}</Text>
        <Text>Return Policy</Text>
        <Text>{itemDetail.returnPolicy}</Text>
        <Text>Material Used</Text>
        <Text>{itemDetail.material}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    padding: 1,
  },
  itemImage: {
    width: '95%',
    height: 450,
    justifyContent: 'center',
  },
  colorBox: {
    width: 50,
    height: 50,
  },
  sizeBox: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 3,
  },
  button: {
    backgroundColor: 'blue',
  },
});
