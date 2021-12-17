import React from 'react';
import { ScrollView } from 'react-native';
import CatagoryCard from '../components/CatagoryCard';
import { CATEGORIES } from '../data/dummy-data';

export default function CatagoryList({ navigation }) {
  const handleOnPress = id => {
    navigation.navigate('ItemList', {
      categoryId: id,
    });
  };
  return (
    <ScrollView>
      {CATEGORIES.map(cat => (
        <CatagoryCard
          id={cat.id}
          title={cat.title}
          description={cat.description}
          imageURL={cat.imageURL}
          onPress={() => handleOnPress(cat.id)}
        />
      ))}
    </ScrollView>
  );
}
