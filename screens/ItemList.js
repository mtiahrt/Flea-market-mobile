import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ITEMS } from '../data/dummy-data';

export default function ItemList({ route }) {
  const { categoryId } = route.params;
  console.log('catid i got is', categoryId);
  return (
    <View>
      {ITEMS.filter(x => x.categoryId === categoryId).map(item => {
        return (
          <>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.imageURL}</Text>
          </>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
