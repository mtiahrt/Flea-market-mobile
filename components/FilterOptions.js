import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

const data = [
  { categoryId: 'c1', subcategoryId: 's1', label: 'mens', isChecked: false },
  { categoryId: 'c1', subcategoryId: 's2', label: 'womens', isChecked: true },
  { categoryId: 'c1', subcategoryId: 's3', label: 'kids', isChecked: false },
];
export default function FilterOptions({ parentCallback }) {
  useEffect(() => {
    return () => {
      parentCallback(checked);
    };
  }, []);

  const [checked, setChecked] = useState(data);
  const handledClick = name => {
    const changedIndex = checked.map(x => x.label).indexOf(name);
    let newState = checked.concat();
    newState[changedIndex].isChecked = !newState[changedIndex].isChecked;
    setChecked(newState);
  };

  return (
    <View>
      <Checkbox.Item
        label="Mens"
        color="black"
        status={
          checked.find(x => x.label === 'mens').isChecked
            ? 'checked'
            : 'unchecked'
        }
        onPress={() => handledClick('mens')}
      />
      <Checkbox.Item
        label="Womens"
        color="black"
        status={
          checked.find(x => x.label === 'womens').isChecked
            ? 'checked'
            : 'unchecked'
        }
        onPress={() => handledClick('womens')}
      />
      <Checkbox.Item
        label="Kids"
        color="black"
        testID="myTest"
        status={
          checked.find(x => x.label === 'kids').isChecked
            ? 'checked'
            : 'unchecked'
        }
        onPress={() => handledClick('kids')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
