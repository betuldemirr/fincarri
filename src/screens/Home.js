import {CurrentRenderContext} from '@react-navigation/native';
//import moment from 'moment';
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
import Takvim from './components/Takvim';
//import Header from './components/Header';
//import List from './components/List';

const Home = () => {
  //total
  const [totalIncome, setTotalIncome] = useState();
  const [totalExpense, setTotalExpense] = useState();
  //list
  const [price, setPrice] = useState();
  const [txt, setTxt] = useState();
  const [len, setLen] = useState(0);
  const [listItems, setListItems] = useState([]);

  const handleAddList = () => {
    setLen(listItems.length + 1);
    const submit = {len, txt, price};
    listItems.push(submit);
    setListItems(listItems);
    setTxt(null);
    setPrice(null);
  };

  return (
    <ImageBackground
      source={require('../assets/splash.png')}
      style={styles.imgContainer}>
      <View style={styles.totalContainer}>
        <Text style={styles.incomeCont}>Gelir:{totalIncome}</Text>
        <Text style={styles.expenseCont}>Gider:{totalExpense}</Text>
        <Text style={styles.netCont}>Net:</Text>
      </View>

      <FlatList
        style={styles.listContainer}
        data={listItems}
        numColumns={1}
        renderItem={({item}) => {
          return (
            <View style={styles.itemsRow}>
              <Text style={styles.itemText}>{item.txt}</Text>
              <Text style={styles.itemPrice}>₺ {item.price}</Text>
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
            style={styles.expense}
            placeholder={'Açıklama'}
            placeholderTextColor={'grey'}
            value={txt}
            onChangeText={text => setTxt(text)}
          />
          <TextInput
            style={styles.expense}
            placeholder={'Tutar'}
            placeholderTextColor={'grey'}
            value={price}
            onChangeText={text => setPrice(text)}
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddList()}>
            <View style={styles.addItems}>
              <Text style={styles.add}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  totalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: 50,
    marginTop: 10,
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  incomeCont: {
    width: 120,
    height: 40,
    fontSize: 20,
  },
  expenseCont: {
    width: 120,
    height: 40,
    fontSize: 20,
  },
  netCont: {
    width: 120,
    height: 40,
    fontSize: 20,
  },
  listContainer: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    marginTop: 10,
    marginBottom: 10,
  },
  itemsRow: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: 5,
    margin: 0,
    alignItems: 'center',
  },
  itemText: {
    width: '70%',
    paddingLeft: 30,
    color: 'black',
    fontSize: 20,
  },
  itemPrice: {
    width: '30%',
    color: 'red',
    fontSize: 20,
  },
  writeContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    marginRight: 8,
    marginLeft: 8,
  },
  expense: {
    width: '39%',
    backgroundColor: '#FFD700',
    borderRadius: 5,
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#FFD700',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  addItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
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


import CalendarStrip from 'react-native-calendar-strip';
let dateWhitelist = [
  {
    start: moment(),
    end: moment().add(3, 'days'),
  },
];
let datesBlacklist = [moment().add(1, 'days')];


        <CalendarStrip
        calendarAnimation={{type: 'sequence', duration: 30}}
        daySelectionAnimation={{
          type: 'border',
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: 'white',
        }}
        style={{height: 100, paddingTop: 20, paddingBottom: 10}}
        calendarHeaderStyle={{color: 'white'}}
        calendarColor={'#7743CE'}
        dateNumberStyle={{color: 'white'}}
        dateNameStyle={{color: 'white'}}
        highlightDateNumberStyle={{color: 'white'}}
        highlightDateNameStyle={{color: 'white'}}
        disabledDateNameStyle={{color: 'white'}}
        disabledDateNumberStyle={{color: 'white'}}
        datesBlacklist={datesBlacklist}
        dateWhitelist={dateWhitelist}
        iconContainer={{flex: 0.1}}
        scrollable={true}
      />
*/
