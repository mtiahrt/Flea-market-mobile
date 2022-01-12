import React, { useLayoutEffect, useState, useContext } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Button from '../components/Button';
import { ITEMSDETAILS } from '../data/dummy-data';
import { Divider } from 'react-native-paper';
import { t } from 'react-native-tailwindcss';
import { CartContext } from '../contexts/CartContext';

export default function ItemDetail({ route, navigation }) {
  const [activeColor, setActiveColor] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const cart = useContext(CartContext);
  const { itemId } = route.params;
  const itemDetail = ITEMSDETAILS.find(x => x.itemId === itemId);

  useLayoutEffect(() => {
    if (cart.itemDetailIds.includes(itemDetail.id)) {
      setIsButtonDisabled(true);
    }
    navigation.setOptions(
      {
        headerRight: () => (
          <Button icon={'cart'} onPress={() => {}} title="cart"></Button>
        ),
      },
      [navigation]
    );
  });

  const setSizeToSelected = txt => {
    setActiveColor(txt);
  };
  const setSizeBoxStyle = size => {
    return itemDetail?.sizes?.includes(size)
      ? styles.sizeBox
      : { ...styles.sizeBox, ...styles.sizeBoxDisabled };
  };
  const addToCart = id => {
    if (!isButtonDisabled || cart.itemDetailIds.includes(id)) {
      cart.setItemDetailIds([id, ...cart.itemDetailIds]);
      setIsButtonDisabled(true);
    }
  };

  return (
    <ScrollView>
      {itemDetail?.photos && (
        <Image
          style={styles.itemImage}
          source={{ uri: itemDetail.photos[0] }}
        />
      )}
      <View style={styles.container}>
        <Divider style={styles.divider} />
        <Text style={styles.itemManufacturer}>Express</Text>
        <Text>{itemDetail?.title}</Text>
        <Text style={styles.price}>$88</Text>
        <Divider style={styles.divider} />
        <Text style={styles.newSection}>Color:</Text>
        <View style={styles.colorBoxes}>
          {itemDetail?.colors.map(color => {
            return (
              <Text
                key={color.color}
                onPress={() => setSizeToSelected(color.color)}
                style={[
                  styles.colorBox,
                  { backgroundColor: color.color },
                  activeColor === color.color ? styles.colorBoxSelected : {},
                ]}
              >
                {color.name}
              </Text>
            );
          })}
        </View>
        <Text style={styles.newSection}>Size:</Text>
        <View style={styles.sizeBoxes}>
          <Text style={setSizeBoxStyle('XS')}>XS</Text>
          <Text style={setSizeBoxStyle('S')}>S</Text>
          <Text style={setSizeBoxStyle('M')}>M</Text>
          <Text style={setSizeBoxStyle('L')}>L</Text>
          <Text style={setSizeBoxStyle('XL')}>XL</Text>
        </View>
        <Button
          disabled={isButtonDisabled}
          onPress={() => addToCart(itemDetail.id)}
          label="Add to Cart"
        />
        <View>
          <Text style={styles.detailTitle}>Estimated Delivery:</Text>
          <Text style={styles.detail}>{itemDetail?.estimatedDelivery}</Text>
          <Text style={styles.detailTitle}>Delivary Method:</Text>
          <Text style={styles.detail}>{itemDetail?.deliveryTerms}</Text>
          <Text style={styles.detailTitle}>Return Policy:</Text>
          <Text style={styles.detail}>{itemDetail?.returnPolicy}</Text>
          <Text style={styles.detailTitle}>Material Used:</Text>
          <Text style={styles.detail}>{itemDetail?.material}</Text>
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
  itemManufacturer: {
    fontSize: 40,
  },
  price: {
    color: t.textGreen600,
  },
  divider: { borderWidth: 0.3, borderColor: '#a0aec0' },
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
  colorBoxSelected: {
    borderWidth: 3,
    borderColor: '#a0aec0',
  },
  sizeBoxes: {
    marginTop: 10,
    flexDirection: 'row',
  },
  sizeBox: {
    margin: 5,
    width: 50,
    height: 50,
    padding: 15,
    borderColor: '#a0aec0',
    borderWidth: 2,
  },
  sizeBoxDisabled: {
    color: 'lightgray',
    borderColor: 'lightgray',
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  detail: {
    marginBottom: 10,
  },
});
