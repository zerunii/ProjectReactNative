import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  Button,
} from 'react-native';

const AlertExample = () => {

    const simpleAlertHandler = ()=>{
        alert('Hello I am Simple Alert')
    }
    const twoOptionHandler = ()=>{
        //function to make 2 option alert
        Alert.alert(
            //title
            'Hello',
            //body
            'What the?!',
            [
                {
                    text:'Yes',
                    onPress:()=>console.log('Yes Pressed')
                },
                {
                    text:'No',
                    onPress:()=>console.log('No Pressed')
                }
            ],
            {cancelable:true}

        )
    }
    const threeOptionHandler = ()=>{
        Alert.alert(
            'Hello',
            'Why I am still here?',
            [
                {
                    text:'Just to suffer',
                    onPress:()=>console.log('just Pressed')
                },
                {
                    text:'Nope',
                    onPress:()=>console.log('Yes Pressed')
                },
                {
                    text:'Not yet',
                    onPress:()=>console.log('No Pressed')
                }
            ],
            {cancelable:false}

        )
    }


  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Button title ='Simple Alert'
            onPress={simpleAlertHandler}
            />
            <Button title ='Alert with Two Option'
            onPress={twoOptionHandler}
            />
            <Button title ='Alert with Three Option'
            onPress={threeOptionHandler}
            />
        </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
