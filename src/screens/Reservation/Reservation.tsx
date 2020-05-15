import React from 'react';
import {StyleSheet, View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import ReservationStack from './ReservationStack';
import ReservationModal from './ReservationModal';

import Brand from '../../assets/FullLogo';

class Reservation extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <ReservationStack title={'알래스카판다 예약'} />
                <View style={styles.BrandContainer}>
                    <Brand style={{alignSelf: 'center'}} width={280} height={50} />
                </View>
                <View style={styles.WelContainer}>
                    <Text style={styles.TextStyle}>{'알래스카판다에 오신 것을\n환영합니다'}</Text>
                </View>
                <View style={styles.AlertContainer}>
                    <Text style={styles.AlertStyle}>{'현재 앱 서비스 오픈 준비 중이며\n이메일 주소와 성함을 남겨주시면\n서비스 정식 오픈 시 개별적으로\n연락을 드리도록 하겠습니다.'}</Text>
                </View>
                <View style={styles.InputContainer}>
                    <Text>이메일</Text>
                    <TextInput style={{width: wp('70%'), height: hp('5%'), borderBottomWidth: 1}} />
                </View>
                <View style={styles.InputContainer}>
                    <Text>성함</Text>
                    <TextInput style={{width: wp('70%'), height: hp('5%'), borderBottomWidth: 1}} />
                </View>
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity><Text style={{textAlign: 'center', lineHeight: hp('8%'), fontSize: wp('5%')}}>등록</Text></TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    BrandContainer: {
        marginTop: hp('8%'),
    },
    WelContainer: {
        marginTop: hp('4%'),
    },
    TextStyle: {
        textAlign: 'center',
        fontSize: wp('5%'),
        color: '#212121',
    },
    AlertContainer: {
        marginTop: hp('4%'),
    },
    AlertStyle: {
        textAlign: 'center',
        fontSize: wp('5%'),
        color: '#FF6F61',
    },
    InputContainer: {
        alignSelf: 'center',
        marginTop: hp('5%'),
    },
    ButtonContainer: {
        width: wp('70%'),
        height: hp('8%'),
        backgroundColor: '#FF6F61',
        borderRadius: 10,

        marginTop: hp('3%'),
        alignSelf: 'center',
    },
});

export default Reservation;