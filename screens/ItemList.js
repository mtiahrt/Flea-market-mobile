import react from 'react';
import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Modal, Button } from 'react-native-paper';
import FilterOptions from '../components/FilterOptions';
import { ITEMS } from '../data/dummy-data';

export default function ItemList({ route, navigation }) {
  const [visible, setVisible] = React.useState(false);
  const { categoryId } = route.params;
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  const handleOnDismiss = () => setVisible(false);

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
  return (
    <react.Fragment>
      <Modal
        onDismiss={handleOnDismiss}
        contentContainerStyle={containerStyle}
        visible={visible}
      >
        <Text>This is my modal</Text>
        <FilterOptions />
      </Modal>
      {ITEMS.filter(x => x.categoryId === categoryId).map(item => {
        return (
          <react.Fragment key={item.id}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.imageURL}</Text>
          </react.Fragment>
        );
      })}
    </react.Fragment>
  );
}

const styles = StyleSheet.create({});
