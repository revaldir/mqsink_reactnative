import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, TextInput } from '../../components';
import { Fire } from '../../config';
import { showError, storeData, useForm } from '../../utils';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth().signInWithEmailAndPassword(form.email, form.password).then(res => {
      dispatch({type: 'SET_LOADING', value: false});
      Fire.database().ref(`users/${res.user.uid}/`).once('value').then(resDB => {
        if (resDB.val()) {
          storeData('user', resDB.val());
          navigation.replace('MainApp');
        }
      })
    })
    .catch(err => {
      dispatch({type: 'SET_LOADING', value: false});
      showError(err.message);
    });
  }

  return (
    <View style={styles.page}>
      <Header title="Sign In" />
      <View style={styles.container}>
        <View>
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInput 
            label="Password" 
            placeholder="Type your password" 
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
        </View>
        <View>
          <Button text="Sign In" onPress={onSubmit} />
          <Gap height={12} />
          <Button
            text="Create New Account"
            color="#8D92A3"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
    justifyContent: 'space-between'
  },
});
