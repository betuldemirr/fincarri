import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import firebase from '@react-native-firebase/app';
//import auth from '@react-native-firebase/auth';

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

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const createAccount = async () => {
    setIsLoading(true);
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      //await response.user.updateProfile({displayName: name});
      navigation.navigate('Login');
    } catch (e) {
      setIsLoading(false);
      alert(e.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <ImageBackground
          source={require('../assets/splash.png')}
          style={styles.imgContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Finance Carrier</Text>

            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={text => setEmail(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => createAccount()}
              loading={isLoading}>
              <Text>Kaydol</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#446141',
  },
  innerContainer: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width / 1.4,
    height: Dimensions.get('window').height / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '4%',
    marginBottom: '4%',
    paddingBottom: 10,
    borderRadius: 20,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
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
    width: 150,
    height: 150,
    borderRadius: 10,
    opacity: 0.7,
  },
  text: {
    flexDirection: 'row',
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#3da660',
    marginBottom: '7%',
  },
});

/**
 *
 */
