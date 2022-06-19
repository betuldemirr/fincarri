import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {Agenda} from 'react-native-calendars';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Takvim = () => {
  const [items, SetItems] = useState([]);

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      SetItems(newItems);
    }, 1000);
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        style={styles.container}
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2022-06-19'}
      />
    </View>
  );
};

export default Takvim;

const styles = StyleSheet.create({

});
