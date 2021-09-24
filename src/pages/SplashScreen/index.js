import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Logo } from '../../assets';
import { Fire } from '../../config';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          // Is signed in
          navigation.replace('MainApp');
        } else {
          // Not signed in
          navigation.replace('GetStarted');
        }
      }, 3000);
    });
    
    return () => unsubscribe();
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#389D86',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 20}} />
      <Text
        style={{
          fontSize: 32,
          color: 'white',
          fontFamily: 'Montserrat-SemiBold',
        }}>
        MQSink
      </Text>
    </View>
  );
};

export default SplashScreen;
