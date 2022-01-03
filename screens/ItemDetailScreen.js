import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import Button from '../components/Button';
import { ITEMSDETAILS } from '../data/dummy-data';
import { Divider, Text } from 'react-native-paper';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

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
    <ScrollView>
      <Image style={styles.itemImage} source={{ uri: itemDetail.photos[0] }} />
      <View style={styles.container}>
        <Divider style={styles.divider} />
        {/* todo add title to props */}
        <Text style={styles.itemTitle}>Express Men</Text>
        <Text>{itemDetail.title}</Text>
        <Text>$88</Text>
        <Divider style={styles.divider} />
        <Text style={styles.newSection}>Color:</Text>
        {/* todo add color selection state here */}
        <View style={styles.colorBoxes}>
          <Text style={[styles.colorBox, { backgroundColor: 'powderblue' }]}>
            blue
          </Text>
          <Text style={[styles.colorBox, { backgroundColor: 'skyblue' }]}>
            sky
          </Text>
          <Text style={[styles.colorBox, { backgroundColor: 'steelblue' }]}>
            steel
          </Text>
        </View>
        <Text style={styles.newSection}>Size:</Text>
        {/* todo add selected size here */}
        <View style={styles.sizeBoxes}>
          <Text style={styles.sizeBox}>XS</Text>
          <Text style={styles.sizeBox}>S</Text>
          <Text style={styles.sizeBox}>M</Text>
          <Text style={styles.sizeBox}>L</Text>
          <Text style={styles.sizeBox}>XL</Text>
        </View>
        <Button label="Add to Cart" />
        <View style={styles.details}>
          <Text style={styles.detailTitle}>Estimated Delivery:</Text>
          <Text style={styles.detail}>{itemDetail.estimatedDelivery}</Text>
          <Text style={styles.detailTitle}>Delivary Method:</Text>
          <Text style={styles.detail}>{itemDetail.deliveryTerms}</Text>
          <Text style={styles.detailTitle}>Return Policy:</Text>
          <Text style={styles.detail}>{itemDetail.returnPolicy}</Text>
          <Text style={styles.detailTitle}>Material Used:</Text>
          <Text style={styles.detail}>{itemDetail.material}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemImage: {
    width: '100%',
    height: 450,
  },
  container: {
    flex: 1,
    padding: 6,
    margin: 5,
  },
  itemTitle: {
    fontSize: 40,
  },
  divider: { borderWidth: 0.3, borderColor: 'gray' },
  newSection: {
    marginTop: 15,
  },
  colorBoxes: {
    flexDirection: 'row',
  },
  colorBox: {
    margin: 5,
    padding: 15,
  },
  sizeBoxes: {
    marginTop: 10,
    flexDirection: 'row',
  },
  sizeBox: {
    margin: 5,
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 3,
  },
  details: {
    // backgroundColor: 'pink',
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  detail: {
    marginBottom: 10,
  },
});