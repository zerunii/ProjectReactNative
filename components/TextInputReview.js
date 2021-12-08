import React from 'react';

import {useState} from 'react';

import {StyleSheet, SafeAreaView, TextInput, Text, View} from 'react-native';

const TextInputReview = () => {
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:'blue'}} >{text}</Text>
      <TextInput
        placeholder="Enter Text"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    textAlign:'center',
  },
});

export default TextInputReview;
