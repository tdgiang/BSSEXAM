import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {WIDTH, HEIGHT, getFontSize} from '../../config/Functions';
import R from '../../assets/R';
import Item from './Item';

const ListUserView = ({data, onRefetch}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={onRefetch} style={styles.btn}>
        <Text style={styles.txtBtn}>Fetch Random</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.wrap}>
      <FlatList
        numColumns={2}
        data={data}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          marginBottom: 10,
        }}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  </SafeAreaView>
);

export default ListUserView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  btn: {
    width: WIDTH(180),
    height: HEIGHT(50),
    backgroundColor: 'red',
    borderRadius: HEIGHT(5),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
  },
  txtBtn: {
    color: R.colors.white,
    fontSize: getFontSize(18),
    fontWeight: 'bold',
  },
  wrap: {
    flex: 1,
    backgroundColor: R.colors.bgListUser,
    paddingTop: 10,
  },
});
