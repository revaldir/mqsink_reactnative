import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILSuccessSignUp />
      <Gap height={64} />
      <Text style={styles.title}>Sign Up Success!</Text>
      <Gap height={50} />
      <View style={styles.buttonContainer}>
        <Button text="Continue" onPress={() => navigation.replace('MainApp')} />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 20, fontFamily: 'Montserrat-SemiBold', color: '#020202'},
  buttonContainer: {width: '100%', paddingHorizontal: 80}
});
