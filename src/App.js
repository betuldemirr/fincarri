import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

/**
 * initialRouteName="Login"
 *
 *
 *
        <Stack.Screen
          initialRouteName="Login"
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
 */
