import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {WIDTH, HEIGHT, getFontSize, getWidth} from '../../config/Functions';
import R from '../../assets/R';

const Item = ({item}) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  if (isShowDetail)
    return (
      <TouchableOpacity
        onPress={() => setIsShowDetail(false)}
        style={styles.cardContainer}>
        <View style={styles.wrapContent}>
          <View style={styles.rowItem}>
            <Text>Full name:</Text>
            <View style={styles.wrapRight}>
              <Text
                style={
                  styles.txtRight
                }>{`${item.first_name} ${item.last_name}`}</Text>
            </View>
          </View>

          <View style={styles.rowItem}>
            <Text>Phone:</Text>
            <View style={styles.wrapRight}>
              <Text style={styles.txtRight}>{`${item.phone_number}`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  return (
    <TouchableOpacity
      onPress={() => setIsShowDetail(true)}
      style={styles.cardContainer}>
      <Image source={{uri: item.avatar}} style={styles.img} />
      <View style={styles.wrapContent}>
        <Text
          style={styles.txtName}>{`${item.first_name} ${item.last_name}`}</Text>
        <Text numberOfLines={1}>{item.username}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  cardContainer: {
    width: getWidth() / 2 - 20,
    backgroundColor: R.colors.white,
    borderRadius: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'red',
  },
  img: {
    width: getWidth() / 2 - 60,
    height: 120,
  },
  wrapContent: {
    width: '100%',
    paddingHorizontal: WIDTH(10),
    marginVertical: HEIGHT(10),
  },
  txtName: {
    fontSize: getFontSize(16),
    fontWeight: 'bold',
  },
  rowItem: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  wrapRight: {
    flex: 1,
    marginLeft: 5,
  },
  txtRight: {
    textAlign: 'right',
  },
});
