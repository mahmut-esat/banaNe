import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Sign.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor!',
        type: 'danger',
      });
      return
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'succes',
      });
      navigation.navigate('LoginPage');
      setLoading(false);
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
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
            <Input
              value={values.repassword}
              onType={handleChange('repassword')}
              placeholder="şifrenizi tekrar giriniz."
              isSecure={true}
            />

            <Button text="Kayıt Ol" onPress={handleSubmit} />
            <Button text="Geri" theme="secondary" onPress={handleLogin} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Sign;
