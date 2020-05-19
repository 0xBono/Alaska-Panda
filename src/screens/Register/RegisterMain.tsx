import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {scale} from '../../constants/size';

import Brand from '../../assets/Logo';

class RegisterMain extends Component {
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <ScrollView>
                    <View style={styles.BrandContainer}>
                        <Brand width={120} height={120} />
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.TextStyle}>{'알래스카판다에 오신 것을\n환영합니다.'}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.ButtonContainer}>
                                <Text style={styles.ButtonTextStyle}>로그인</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.ButtonSolidContainer}>
                                <Text style={styles.ButtonSolidTextStyle}>계정 만들기</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.SoonContainer}>
                            <Text style={styles.SoonTextStyle}>나중에 하기</Text>
                        </View>
                    </TouchableOpacity>
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
    BrandContainer: {
        alignSelf: 'center',
        marginTop: hp('13%'),
    },
    TextContainer: {
        marginTop: hp('1%'),
    },
    TextStyle: {
        textAlign: 'center',
        fontSize: scale(20),
        color: '#212121',
        fontWeight: 'bold',
    },
    ButtonContainer: {
        marginTop: hp('5%'),
        alignSelf: 'center',
        width: wp('87%'),
        height: hp('10%'),
        backgroundColor: "#dc2125",
        borderRadius: 5,
    },
    ButtonSolidContainer: {
        marginTop: hp('5%'),
        alignSelf: 'center',
        width: wp('87%'),
        height: hp('10%'),
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#dc2125",
        borderRadius: 5,
    },
    ButtonTextStyle: {
        fontSize: scale(18),
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        lineHeight: scale(60),
    },
    ButtonSolidTextStyle: {
        fontSize: scale(18),
        fontWeight: 'bold',
        color: '#dc2125',
        textAlign: 'center',
        lineHeight: scale(60),
    },
    SoonContainer: {
        alignSelf: 'center',
        marginTop: hp('5%'),
    },
    SoonTextStyle: {
        color: "#dc2125"
    }
});

export default RegisterMain;