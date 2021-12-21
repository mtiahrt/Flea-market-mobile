import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Modal, Button, Portal } from 'react-native-paper';
import FilterOptions from '../components/FilterOptions';
import { ITEMS } from '../data/dummy-data';

export default function ItemList({ route, navigation }) {
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState(ITEMS);
  const { categoryId } = route.params;
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  const handleOnDismiss = params => {
    setVisible(false);
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
            onPress={() => setVisible(!visible)}
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
          visible={visible}
        >
          <Text>Select filter options</Text>
          <FilterOptions parentCallback={handleCallback} />
        </Modal>
      </Portal>
      <View>
        {items.map(item => {
          return (
            <React.Fragment key={item.id}>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{item.imageURL}</Text>
            </React.Fragment>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
