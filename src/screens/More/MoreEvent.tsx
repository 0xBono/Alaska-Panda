import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import StackNavigation from '../../components/StackNavigation';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

import {scale} from '../../constants/size';

const MoreEvent: React.FC<{}> = () => (
    <SafeAreaView style={styles.Container}>
        <StackNavigation status={true} title={'이벤트'} />
        <ScrollView>
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.ListContainer}>
                    <Image
                        style={styles.EventImageContainer}
                        source={{uri:'https://pgnqdrjultom1827145.cdn.ntruss.com/img/f7/35/f7359b5c15fb7f3ab50910e08b64b48f361426915f2eb849f23d71e0adeeb1c9_v1.jpg'}}/>
                    <View style={styles.EventTextContainer}>
                        <Text numberOfLines={1} style={{ width: '80%', fontWeight: 'bold' }}>첫 가입 고객, 의류 10% 할인 쿠폰 100% 지급</Text>
                        <Text style={{ marginTop: hp('1%'), color: '#C8C8C8' }}>2020. 11. 22 22:30 까지</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    ListContainer: {
        marginTop: hp('2%'),
        marginLeft: wp('6%'),
    },
    EventImageContainer: {
        width: scale(330),
        height: hp('25%') 
    },
    EventTextContainer: {
        marginTop: hp('2%'),
    }
})

export default MoreEvent;