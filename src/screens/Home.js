import {CurrentRenderContext} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import Header from './components/Header';
//import List from './components/List';

const Home = () => {
  const [list, setList] = useState();
  const [price, setPrice] = useState();
  const [txt, setTxt] = useState();
  const [len, setLen] = useState(0);
  const [listItems, setListItems] = useState([]);

  /* const renderEx = ({item}) => {
    return (
      <List>
        <Text>{item.txt}</Text>
        <Text>{item.price}</Text>
      </List>
    );
  };*/

  const handleAddList = () => {
    setLen(listItems.length + 1);
    const submit = {len, txt, price};
    listItems.push(submit);
    setListItems(listItems);
    //setList(null);
    setTxt(null);
    setPrice(null);
    console.log(txt);
    console.log(price);
    console.log(submit);
  };
  return (
    <ImageBackground
      source={require('../assets/bg2.png')}
      style={styles.imgContainer}>
      <Header />
      <FlatList
        style={styles.listContainer}
        data={listItems}
        numColumns={1}
        renderItem={({item}) => {
          return (
            <View style={styles.items}>
              <Text style={styles.itemTxt}>{item.txt}</Text>
              <Text style={styles.itemTxt}>{item.price}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.len}
      />

      <KeyboardAvoidingView
        keyboardVerticalOffset={-500}
        behavior="padding"
        style={styles.writeContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Expense made for ?'}
            placeholderTextColor={'#FE9801'}
            value={txt}
            onChangeText={text => setTxt(text)}
          />
          <TextInput
            style={styles.price}
            placeholder={'Amount'}
            placeholderTextColor={'#FE9801'}
            value={price}
            onChangeText={text => setPrice(text)}
          />
        </View>

        <TouchableOpacity
          style={{
            width: '10%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handleAddList()}>
          <View style={styles.addItems}>
            <Text style={styles.add}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
export default Home;

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  listContainer: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  writeContainer: {
    position: 'relative',
    width: '85%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    color: 'black',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'space-around',
    width: '48%',
    borderRadius: 10,
    paddingLeft: 15,
  },
  price: {
    color: 'black',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '48%',
    justifyContent: 'space-around',
    borderRadius: 10,
    paddingLeft: 15,
  },
  addItems: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    borderRadius: 50,
    borderColor: '#FFD700',
    borderWidth: 2,
    width: '100%',
  },
  add: {
    fontSize: 33,
    justifyContent: 'center',
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 16,
  },
  itemTxt: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

/*
*{listItems.map((item, index) => {
          return (
            <TouchableOpacity text={item} key={index} data={listItems}>
              <Text>{item.txt}</Text>
              <Text>{item.price}</Text>
            </TouchableOpacity>
          );
        })}
        

          const renderEx = ({item}) => {
    return (
      <List>
        <Text>{item.txt}</Text>
        <Text>{item.price}</Text>
      </List>
    );
  };
*/
