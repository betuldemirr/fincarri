import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}> {props.text} </Text>
      <Text style={styles.price}> {props.text} </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    margin: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
});
