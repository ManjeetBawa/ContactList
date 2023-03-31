/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import Contacts from 'react-native-contacts';
import {Image, PermissionsAndroid, StyleSheet} from 'react-native';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const getcontacts = () => {
    Contacts.getAll().then(contacts => {
      setData(contacts);
    });
  };
  // item.displayName[0]}{item.familyName[0]
  useEffect(() => {
    getcontacts();
  }, []);
  const renderpost = ({item}) => {
    // console.log(item.hasThumbnail);
    // console.log(item);
    return (
      <View style={styles.box}>
        <View style={styles.picture}>
          {item.hasThumbnail && (
            <Image source={{uri: item.thumbnailPath}} style={styles.pic} />
          )}
        </View>
        <View>
          <Text style={styles.displayName}>{item.displayName}</Text>
          <Text style={styles.number}>{item.phoneNumbers[0].number}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Text>contact list</Text>
      {/* <TouchableOpacity onPress={getcontacts}>
        <Text>click here</Text>
      </TouchableOpacity> */}
      <FlatList data={data} renderItem={renderpost} />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  box: {
    margin: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pic: {
    height: 50,
    width: 50,
    borderRadius: 18,
  },
  picture: {
    height: 50,
    width: 50,
    borderRadius: 18,
    borderWidth: 1,
  },
  displayName: {
    fontSize: 30,
  },
  number: {
    fontSize: 20,
  },
});
