import React from 'react';
import {StyleSheet, View, Text, TextInput, Image, ScrollView} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { scale } from '../constants/size';
import Location from '../assets/location';


class AlaskaList extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.BannerContainer}>
          <Image
          style={styles.Banner}
          source={require('../assets/Banner.png')}
          />
        </View>
        <View style={styles.InfoContainer}>
          <Text style={styles.LargeTitle}>하나언니</Text>
          <Text style={styles.DateTitle}>~2020. 09. 01 22:30</Text>
        </View>
        <View style={styles.LocationContaindr}>
          <Location />
          <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>서울시 서초구</Text>
          <Text style={{color: '#666666', marginLeft: scale(10), fontSize: scale(12)}}>서울시 서초구 양재대로 159</Text>
        </View>
        <View style={styles.SubContainer}>
          <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>#키워드</Text>
          <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>#키워드</Text>
          <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>#키워드</Text>
          <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>#키워드</Text>
          <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>#키워드</Text>
        </View>
        <View style={styles.ContentContainer}>
          <Text style={{color: '#484848', fontSize: scale(12)}}>내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    marginTop: hp('4%'),
  },
  BannerContainer: {
    alignSelf: 'center'
  },
  Banner: {
    width: wp('87%'),
    height: hp('30%'),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  InfoContainer: {
    flexDirection: 'row',
    marginLeft: wp('6%'),
  },
  LargeTitle: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginTop: hp('2%')
  },
  DateTitle: {
    color: '#707070',
    marginTop: hp('2%'),
    lineHeight: scale(22),
    marginLeft: wp('39%'),
  },
  LocationContaindr: {
    marginLeft: wp('6%'),
    flexDirection: 'row',
    marginTop: hp('1%'),
  },
  SubContainer: {
    marginLeft: wp('3.5%'),
    flexDirection: 'row',
    marginTop: hp('1%'),
  },
  ContentContainer: {
    marginTop: hp('1%'),
    marginLeft: wp('6%'),
    width: wp('87%'),
  },
});


export default AlaskaList;