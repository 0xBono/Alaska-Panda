import React from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ModalDropdown from 'react-native-modal-dropdown';
import { scale } from '../constants/size';

class ReList extends React.Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.MainContainer}>
                    <View style={styles.ShapeContainer} />
                    <View style={styles.TextContainer}>
                        <Text style={{fontSize: scale(14)}}>홍길동</Text>
                        <Text style={{color: '#707070'}}>한 줄 소개입니다. 지정 글자...</Text>
                    </View>
                    <View style={styles.RankContainer}>
                        <ModalDropdown options={['우수 고객', '일반 고객', '불량 고객']}>
                            <Text style={{color: '#2f80ed', textAlign: 'center'}}>우수</Text>
                        </ModalDropdown>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    Container: {
        marginTop: hp('2%'),
    },
    MainContainer: {
        flexDirection: 'row',
    },
    ShapeContainer: {
        width: wp('15%'),
        height: hp('10%'),
        backgroundColor: '#707070',

    },
    TextContainer: {
        marginTop: hp('2%'),
        marginLeft: wp('8%'),
    },
    RankContainer: {
        marginTop: hp('3%'),
        marginLeft: wp('8%'),
        width: wp('10%'),
        height: hp('3.5%'),
        borderColor: '#2f80ed',
        borderWidth: 1,
        borderRadius: 10,
    },
})

export default ReList;