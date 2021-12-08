import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
  TouchableOpacity,
  Touchable,
} from 'react-native';

const TouchablePractice = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const onPressAlert = () => {
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    } else if (!password.trim()) {
      alert('Please Enter Password');
    } else {
      alert('Email : '+email +'\nPassword : '+password);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Email"
            underlineColorAndroid="transparent"
            onChangeText={onChangeEmail}
          />
        </View>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Password"
            underlineColorAndroid="transparent"
            onChangeText={onChangePassword}
          />
        </View>
        <TouchableOpacity style={styles.buttonFacebookStyle} 
        activeOpacity={0.5}
        onPress={onPressAlert}
        >
          <View />
          <Text style={styles.buttonTextStyle}>Submit</Text>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TouchablePractice;

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
  buttonTextStyle: {
    color: 'white',
    alignItems:'center',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    
    margin: 5,
  },
});
