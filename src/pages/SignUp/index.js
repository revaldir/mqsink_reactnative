import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, TextInput } from '../../components';
import { Fire } from '../../config';
import { showError, storeData, useForm } from '../../utils';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const onContinue = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
    .createUserWithEmailAndPassword(form.email, form.password)
    .then(userCredential => {
      // Signed in 
      dispatch({type: 'SET_LOADING', value: false});
      setForm('reset');
      const data = {
        fullName: form.fullName,
        email: form.email
      }

      // Save to firebase
      Fire.database()
        .ref('users/' + userCredential.user.uid + '/')
        .set(data)

      // Save to localStorage
      storeData('user', data);
      navigation.replace('SuccessSignUp');
    })
    .catch(err => {
      dispatch({type: 'SET_LOADING', value: false});
      showError(err.message);
    });
  }
  return (
    <View style={styles.page}>
      <Header title="Sign Up" onBack={() => {}} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>  
          <View>
            <TextInput
              label="Full Name"
              placeholder="Type your full name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={16} />
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
        </ScrollView>
        <View>
          <Button
            text="Sign Up Now"
            onPress={onContinue}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
