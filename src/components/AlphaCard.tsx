import React from 'react';
import {StyleSheet, View, Text, TextInput, Image, ScrollView} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { scale } from '../constants/size';


class AlphaCard extends React.Component {
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
          <Text style={styles.LargeTitle}>최고의 정성으로 만드는 웰빙비빔밥</Text>
        </View>
        <View style={styles.SubContainer}>
          <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>#키워드</Text>
          <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>#키워드</Text>
          <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>#키워드</Text>
          <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>#키워드</Text>
          <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>#키워드</Text>
        </View>
        <View style={styles.ContentContainer}>
          <Text style={{color: '#484848', fontSize: scale(12)}}>등록일: 2020. 5. 1.</Text>
          <Text style={{color: '#484848', fontSize: scale(12), marginLeft: wp('5%')}}>수정</Text>
            <Text style={{color: '#484848', fontSize: scale(12), marginLeft: wp('5%')}}>삭제</Text>
        </View>
        <View style={styles.Button}>
            <Text style={{color: '#FFF', fontSize: scale(12), marginLeft: wp('2%'), alignSelf: 'center', lineHeight: scale(30)}}>알래스카 로컬 작성</Text>
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
    flexDirection: 'row',
    marginTop: hp('3%'),
    marginLeft: wp('6%'),
    width: wp('87%'),
  },
  ButtonContainer: {
    position: 'absolute',
    flexDirection: 'row',
  },
  Button: {
      position: 'absolute',
      width: wp('30%'),
      height: hp('5%'),
      backgroundColor: '#dc2125',
      flexDirection: 'row',
      marginLeft: wp('64%'),
      marginTop: hp('41.5%'),
  }
});


export default AlphaCard;