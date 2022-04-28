import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ImageBackground,
} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Login = () => {
  const navigation = useNavigation();

  //const [state, setState] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  //const [loading, setloading] = useState(true);

  const goHome = async () => {
    setIsLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
      console.log('t');
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
      //renderWrongPass();
      console.log('f');
      console.log(e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.mainContainer}
        keyboardVerticalOffset={-500}
        behavior="padding">
        <ImageBackground
          source={require('../assets/splash.png')}
          style={styles.imgContainer}>
          <View style={styles.innerContainer}>
            <Image style={styles.logo} source={require('../assets/log.jpg')} />
            <Text style={styles.title}>Finance Carrier</Text>

            <TextInput
              style={styles.input}
              placeholder={'E-mail'}
              maxLength={30}
              value={email}
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
            />

            <TextInput
              style={styles.input}
              placeholder={'Password'}
              maxLength={20}
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => goHome()}
              loading={isLoading}>
              <Text>Login</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Don't have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{...styles.text, color: '#FFD700'}}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 1.4,
    height: Dimensions.get('window').height / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 10,
    borderRadius: 20,
  },
  input: {
    justifyContent: 'center',
    width: Dimensions.get('window').width / 1.8,
    height: Dimensions.get('window').height / 14,
    backgroundColor: 'rgba(139, 173, 135, 0.7)',
    margin: 7,
    borderRadius: 20,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: '#FFD700',
    width: Dimensions.get('window').width / 3.5,
    height: Dimensions.get('window').height / 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 20,
    opacity: 0.7,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#3da660',
    padding: 20,
  },
  text: {
    flexDirection: 'row',
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
