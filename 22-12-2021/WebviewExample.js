import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const WebviewExample = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{uri: 'https://granbluefantasy.jp'}} 
      style = {{marginTop:20}}
      />
    </SafeAreaView>
  );
};

export default WebviewExample;
