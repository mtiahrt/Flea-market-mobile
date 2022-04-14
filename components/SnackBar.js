import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

const MySnackbar = ({visible, onDismiss, message}) => {

  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismiss}
        // action={{
        //   label: 'Undo',
        //   onPress: () => {
        //     console.log('not implemented')
        //   },
        // }}
      >
        {message}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default MySnackbar;