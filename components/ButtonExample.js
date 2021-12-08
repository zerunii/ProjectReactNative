import React from 'react';
import {StyleSheet, Text, SafeAreaView, Button, View} from 'react-native';
import TextInputReview from './TextInputReview';

const ButtonExample = () => {
  const onPressAlert = () => {
    alert('Hello');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Button Example</Text>
        <Button onPress={onPressAlert} title="Click Me" color="violet" />
      </View>
    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
