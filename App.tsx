import styles from './style';
import React, {useEffect, useState} from 'react';
import Contacts from 'react-native-contacts';
import {Image, PermissionsAndroid} from 'react-native';
import {Text, View, FlatList} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
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
      return <Text>returning error</Text>;
    }
  };
  useEffect(() => {
    getContacts();
  }, []);

  const renderpost = ({item}) => {
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
          <Text style={styles.displayName}>{item?.displayName}</Text>
          <Text style={styles.number}>
            {' '}
            {item.phoneNumbers.length > 0
              ? item?.phoneNumbers[0]?.number
              : null}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact List</Text>
      <FlatList data={data} renderItem={renderpost} />
    </View>
  );
};

export default App;
