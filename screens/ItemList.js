import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Modal, Button, Portal } from 'react-native-paper';
import FilterOptions from '../components/FilterOptions';
import { ITEMS } from '../data/dummy-data';
import ItemCard from '../components/ItemCard';

export default function ItemList({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState(ITEMS);
  const { categoryId } = route.params;
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  const handleOnDismiss = params => {
    setModalVisible(false);
  };
  const handleOnPress = id => {
    navigation.navigate('ItemDetailScreen', {
      itemId: id,
    });
  };
  const handleCallback = filterOptionsSelected => {
    const mySubcategorys = filterOptionsSelected
      .filter(item => item.isChecked)
      .map(item => item.subcategoryId);
    setItems(
      ITEMS.filter(
        i =>
          i.categoryId === categoryId &&
          mySubcategorys.includes(i.subcategoryId)
      )
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => (
          <Button
            icon={'filter'}
            onPress={() => setModalVisible(!modalVisible)}
            title="Filter"
          />
        ),
      },
      [navigation]
    );
  });
  console.log('item list is rendering...');
  return (
    <>
      <Portal>
        <Modal
          onDismiss={handleOnDismiss}
          contentContainerStyle={containerStyle}
          visible={modalVisible}
        >
          <Text>Select filter options</Text>
          <FilterOptions parentCallback={handleCallback} />
        </Modal>
      </Portal>
      <ScrollView>
        {items.map(item => {
          return (
            <ItemCard
              key={item.id}
              title={item.title}
              description={item.description}
              imageURL={item.imageURL}
              onPress={() => handleOnPress(item.id)}
            />
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
