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

let totalIncome = 0;
let totalExpense = 0;
let balance = 0;

const Home = () => {
  //total
  const [incomeColor,setIncomeColor] = useState('green');
  const [expenseColor,setExpenseColor] = useState('white');
  const [priceType,setPriceType] = useState('income');
  const [textColor,setTextColor] = useState('green');
  //list
  const [price, setPrice] = useState();
  const [txt, setTxt] = useState();
  const [len, setLen] = useState(0);
  const [listItems, setListItems] = useState([]);
  const [state,setState] = useState({totalIncome:totalIncome,totalExpense:totalExpense,listItems:listItems,balance:balance});
  
  const handleAddList = () => {
    setLen(listItems.length + 1);
    const listItem = {
      len:len,
      txt:txt,
      price:price,
      color:textColor
    }
    listItems.push(listItem);
    if(priceType==='income'){
      let totalincome =  parseInt(totalIncome);
      totalincome += parseInt(price);
      totalIncome = totalincome;
    }
    else{
      let totalexpense = parseInt(totalExpense);
      totalexpense += parseInt(price);
      totalExpense = totalexpense;
    }
    balance = totalIncome-totalExpense;
    setListItems(listItems);
    setTxt(null);
    setPrice(null);
    setState({totalIncome:totalIncome,totalExpense:totalExpense,listItems:listItems,balance:balance})
  };

  const incomeClickEvent=()=>{
    setTextColor('green');
    setPriceType('income');
    setExpenseColor('white');
    setIncomeColor('green');
  }

  const expenseClickEvent=()=>{
    setTextColor('red');
    setPriceType('expense');
    setExpenseColor('red');
    setIncomeColor('white');
  }

  return (
    <ImageBackground
      source={require('../assets/splash.png')}
      style={styles.imgContainer}>
      <View style={styles.totalContainer}>
        <TouchableOpacity onPress={()=>incomeClickEvent()} style={[styles.topFrames,{color:incomeColor}]} ><Text style={[styles.incomeCont,{color:incomeColor}]}> Gelir:{totalIncome}</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>expenseClickEvent()} style={[styles.topFrames,{color:expenseColor}]}><Text style={[styles.expenseCont,{color:expenseColor}]}>Gider:{totalExpense}</Text></TouchableOpacity>
        <View style={styles.topFrames}><Text style={styles.netCont}>Net:{balance}</Text></View> 
      </View>

      <FlatList
        style={styles.listContainer}
        data={listItems}
        numColumns={1}
        renderItem={({item}) => {
          return (
            <View style={styles.itemsRow}>
              <Text style={styles.itemText}>{item.txt}</Text>
              <Text style={[styles.itemPrice,{color:item.color}]}>₺ {item.price}</Text>
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
            placeholderTextColor={'#242423'}
            value={txt}
            onChangeText={text => setTxt(text)}
          />
          <TextInput
            style={styles.expense}
            placeholder={'Tutar'}
            placeholderTextColor={'#242423'}
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
  topFrames:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    color:'white'
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  totalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: 60,
    marginTop: 10,
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#FFD700',
  },
  incomeCont: {
    color:'white',
    width: 120,
    height: 40,
    fontSize: 22,
    fontWeight: 'bold',
  },
  expenseCont: {
    color:'white',
    width: 120,
    height: 40,
    fontSize: 22,
    fontWeight: 'bold',
  },
  netCont: {
    color:'white',
    width: 120,
    height: 40,
    fontSize: 22,
    fontWeight: 'bold',
  },
  listContainer: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 4,
    borderColor: '#FFD700',
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
    color:'white',
    width: '70%',
    paddingLeft: 30,
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