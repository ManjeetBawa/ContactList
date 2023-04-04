/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import styles from './style';
import React, {useEffect, useState} from 'react';
import Contacts from 'react-native-contacts';
import {Image, PermissionsAndroid, StyleSheet} from 'react-native';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

const App = () => {
  const [data, setData] = useState<[]>([]);
  const getContacts = async () => {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      if (permission === 'granted') {
        const contacts = await Contacts.getAll();
        // console.log(contacts);
        setData(contacts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Contacts.getAll().then((contacts) => {
  //     console.log(contacts);
  //     setContacts([contacts]);
  // })
  useEffect(() => {
    getContacts();
  }, []);
  // item.displayName[0]}{item.familyName[0]

  const renderpost = ({item}) => {
    // console.log(item);
    const col = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'purple',
      'pink',
      'brown',
      'lightgreen',
      'grey',
    ];
    return (
      <View style={styles.box}>
        <View
          style={[
            styles.picture,
            {backgroundColor: col[Math.floor(Math.random() * 10)]},
          ]}>
          {item.hasThumbnail && (
            <Image source={{uri: item.thumbnailPath}} style={styles.pic} />
          )}
          {!item.hasThumbnail && (
            <Text style={styles.initial}>
              {item.displayName[0]}
              {item.familyName[0]}
            </Text>
          )}
        </View>
        <View style={styles.contactpost}>
          <Text style={styles.displayName}>{item.displayName}</Text>
          <Text style={styles.number}>{item.phoneNumbers[0].number}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact List</Text>
      {/* <TouchableOpacity onPress={getcontacts}>
        <Text>click here</Text>
      </TouchableOpacity> */}
      <FlatList data={data} renderItem={renderpost} />
    </View>
  );
};

export default App;
