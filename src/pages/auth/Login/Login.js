import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './Login.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  function handleSignUp() {
    navigation.navigate('SignPage');
  }

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      });
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>

      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.usermail}
              onType={handleChange('usermail')}
              placeholder="e-posta"
            />
            <Input
              value={values.password}
              onType={handleChange('password')}
              placeholder="şifre"
              isSecure={true}
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
            <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
