import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

import Brand from '../../assets/TextLogo';

type Props = {
    navigation: any,
  }

class Reservation extends React.Component<Props> {
    render() {
        const {navigation} = this.props;
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.BrandContainer}>
                    <Brand style={{marginLeft: wp('6%')}} width={200} height={50} />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.MainTextStyle}>알래스카판다에 오신 것을 환영합니다 🎉</Text>
                    <Text style={styles.MainSubStyle}>{'알래스카판다는 소상공인을 위한\n동네 가게 실시간 할인 정보 앱입니다.'}</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.MainTextStyle}>현재는 사전 신청을 받고 있습니다 🙆‍♂️</Text>
                    <Text style={styles.MainSubStyle}>{'현재는 사청 신청을 받는 중입니다.\n이메일과 성함을 남겨주시면 정식 오픈 시\n개별적으로 연락을 드리겠습니다.'}</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.MainTextStyle}>문의 사항은 아래 연락처로 부탁드립니다 ☎️</Text>
                    <Text style={styles.MainSubStyle}>{'서울특별시 영등포구 선유로49길 17, 부윤빌딩 6층\n02-6332-2245'}</Text>
                </View>
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.8} onPress={() => navigation.navigate('ReservationApply')}>
                        <Text style={styles.ButtonTextStyle}>사전 신청하기</Text>
                    </TouchableOpacity>
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
    TextContainer: {
        marginTop: hp('4%'),
        marginLeft: wp('6%'),
    },
    ButtonContainer: {
        marginLeft: wp('6%'),
    },
    MainTextStyle: {
        fontSize: wp('4%'),
        fontWeight: 'bold',
    },
    MainSubStyle: {
        marginTop: hp('2%'),
        color: '#666666',
        lineHeight: hp('2.5%'),
    },
    ButtonStyle: {
        marginTop: hp('22%'),
        width: wp('87%'),
        height: hp('8%'),
        backgroundColor: '#DB2525',
        borderRadius: 14,
    },
    ButtonTextStyle: {
        color: '#FFFFFF',
        fontSize: wp('4.5%'),
        fontWeight: 'bold',

        textAlign: 'center',
        lineHeight: hp('7.5%'),
    },
});

export default Reservation;