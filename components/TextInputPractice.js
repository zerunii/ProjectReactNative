import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
} from 'react-native';

const TextInputPractice1 = () => {
  const [user, onChangeUser] = useState('');
  const [email, onChangeEmail] = useState('');

  const onPressAlert = () => {
    if (!user.trim()) {
      alert('Please Enter Name');
      return;
    } else if (!email.trim()) {
      alert('Please Enter Email');
    } else {
      alert('Success');
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Name"
            underlineColorAndroid="transparent"
            onChangeText={onChangeUser}
          />
        </View>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Email"
            underlineColorAndroid="transparent"
            onChangeText={onChangeEmail}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Button onPress={onPressAlert}
           title="SUBMIT" color="#F67280" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TextInputPractice1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
