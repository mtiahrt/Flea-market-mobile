import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function FilterOptions() {
  const [checked, setChecked] = React.useState(true);

  return (
    <View>
      <Checkbox.Item
        label="Mens"
        color="black"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Checkbox.Item
        label="Womens"
        color="black"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Checkbox.Item
        label="Kids"
        color="black"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
