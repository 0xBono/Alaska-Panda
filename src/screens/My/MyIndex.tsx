import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Navigation from '../../components/Navigation';
import { scale } from '../../constants/size';

import Location from '../../assets/location';
import Heart from '../../assets/heart'

class MyIndex extends React.Component<> {
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <Navigation title={'하나언니 ZIP'} />
                <ScrollView>
                <View style={styles.BannerContainer}>
                <Image
                    style={styles.Banner}
                    source={require('../../assets/Banner.png')}
                />
                </View>
                <View style={styles.ProfileContainer}>
                <Image
                    style={styles.Profile}
                    source={require('../../assets/Profile.png')}
                />
                </View>
                <View style={styles.InfoContainer}>
                    <Text style={{fontSize: scale(18), fontWeight: 'normal'}}>하나언니</Text>
                </View>
                <View style={styles.HeartContainer}>
                    <Heart width={20} height={20} />
                    <Text style={{color: '#ff6b6b', fontSize: scale(12), fontWeight: 'normal', marginTop: hp('-0.1%')}}>1234</Text>
                </View>
                <View style={styles.LocationContaindr}>
                    <Location />
                    <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>서울시 서초구</Text>
                    <Text style={{color: '#666666', marginLeft: scale(10), fontSize: scale(12)}}>서울시 서초구 양재대로 159</Text>
                </View>
                <View style={styles.introContainer}>
                    <Text style={{color: '#e34d50', fontWeight: 'normal'}}>안녕하세요 하나언니 쇼핑몰 입니다 :)</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>상점 정보</Text>
                    <Text style={styles.Content}>프로필 확인 및 수정</Text>
                </View>
                <View style={styles.Bar} />
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>알파카드</Text>
                    <Text style={styles.Content}>10개</Text>
                </View>
                <View style={styles.Bar} />
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>알래스카 로컬</Text>
                    <Text style={styles.Content}>1000개</Text>
                </View>
                <View style={styles.Bar} />
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>ZIP 스토리</Text>
                    <Text style={styles.Content}>1234개</Text>
                </View>
                <View style={styles.Bar} />
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>단골 손님</Text>
                    <Text style={styles.Content}>123명</Text>
                </View>
                <View style={styles.Bar} />
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>포인트</Text>
                    <Text style={styles.Content}>100,000,000P</Text>
                </View>
                <View style={styles.Bar} />
            </ScrollView>
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    BannerContainer: {
    },
    TextContainer: {
        marginLeft: wp('14%'),
        flexDirection: 'row',
        marginTop: hp('4%'),
    },
    Main: {
        color: '#797979',
    },
    Content: {
        position: 'absolute',
        textAlign: 'left',
        color: '#484848',
        marginLeft: wp('45%'),
        textDecorationLine: 'underline',
    },
    Banner: {
        width: wp('100%'),
        height: hp('30%'),
        resizeMode: 'cover',
    },
    Profile: {
        width: wp('33%'),
        height: hp('20%'),
        borderRadius: 500,
        resizeMode: 'cover',
    },
    ProfileContainer: {
        alignSelf: 'center',
        position: 'absolute',
        top: hp('20%'),
    },
    InfoContainer: {
        alignSelf: 'center',
        marginTop: hp('13%'),
    },
    HeartContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: hp('1%'),
    },
    LocationContaindr: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: hp('1%'),
    },
    introContainer: {
        alignSelf: 'center',
        marginTop: wp('2%'),
    },
    Bar: {
        alignSelf: 'center',
        width: wp('87%'),
        height: hp('0.1%'),
        backgroundColor: '#c4c4c4',
        marginTop: wp('4%'),
    },
    tabbar: {
        backgroundColor: '#FFF',
        marginTop: hp('3%'),
      },
      tab: {
        width: wp('33%'),
        height: 70,
      },
      indicator: {
        height: 5,
        backgroundColor: '#dc2125',
      },
      label: {
        fontWeight: '400',
        color: '#212121',
        textAlign: 'center',
      },
})

export default MyIndex;