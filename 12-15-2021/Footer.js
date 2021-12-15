import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  const users = [
    {id: 1, name: 'Ein'},
    {id: 2, name: 'Zwei'},
  ];

  const [count, setCount] = useState(0); //const count = 0
  const [title, ssetTtitile] = useState('Hello')

  //always update if re-render
  useEffect(() => {
    console.log('use effect1');
  });
  //ทำงานแค่รอบเดียว เช้นการเรียกข้อมูลจาก backend
  useEffect(() => {
    console.log('use effect2');
  }, []);
  useEffect(() => {
    console.log('use effect3');
  }, [title]);

  return (
    <View>
      <Text 
      style={styles.title}>Thai Nichi Intitute of Technology {count}
      </Text>
      {users.map((user, index) => {
        return (
          <Text key={user.id}>
            {++index} {user.name}
          </Text>
        );
      })}
      <Button
        title="Click Me"
        onPress={() => {
          //setCount(5); //update count
          setCount(count + 1);
        }}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
