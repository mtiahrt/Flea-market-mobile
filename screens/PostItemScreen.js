import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Input from '../components/Input';
import Button from '../components/Button';
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';

export default function PostItem() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log('submit button was pressed data entered:', data);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Post a New Item</Text>
        <Controller
          rules={{ required: { value: true, message: 'Title is required' } }}
          defaultValue=""
          name="title"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Title"
              onChangeText={text => onChange(text)}
              value={value}
              erorr={errors.title}
              errorText={errors?.title?.message}
            />
          )}
        />
        <Controller
          rules={{ required: { value: true, message: 'Category is required' } }}
          name="category"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Category"
              value={value}
              onChangeText={text => onChange(text)}
              erorr={errors.category}
              errorText={errors?.category?.message}
            />
          )}
        />
        <Controller
          rules={{
            required: {
              value: true,
              message: 'Detailed description is required',
            },
          }}
          name="description"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Description"
              value={value}
              onChangeText={text => onChange(text)}
              erorr={errors.description}
              errorText={errors?.description?.message}
            />
          )}
        />
        <View style={styles.cameraButtons}>
          <FontAwesome
            onPress={() => console.log('camera was pressed')}
            name="camera"
            size={32}
          />
          <FontAwesome name="photo" size={32} color={t.bgGray600} />
        </View>
        <Button onPress={handleSubmit(onSubmit)} label="Submit" />
      </View>
    </>
  );
}

const styles = {
  container: [t.flex1, t.mT10, t.p6, t.bgGray200],
  title: [t.textBlue800, t.textCenter, t.fontBold, t.mB5, t.textXl],
  cameraButtons: [t.flexRow, t.justifyEvenly],
};
