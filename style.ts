import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B46060',
        flex: 1,
    },
    header: {
        backgroundColor: '#4D4D4D',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        marginBottom: 10,
    },
  initial: {
    fontSize: 25,
    fontWeight: 'bold',
    // backgroundColor: 'blue',
  },
  box: {
    marginHorizontal: 10,
    borderRadius: 18,
    marginVertical: 5,
    paddingHorizontal: 5,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    // justifyContent: 'space-around',
    backgroundColor: '#FFBF9B',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayName: {
    fontSize: 30,
  },
  number: {
    fontSize: 20,
  },
  contactpost: {
    marginLeft: 40,
  }
});

export default styles;