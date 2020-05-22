import React from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { scale } from '../constants/size';
import Search from '../assets/search';

class SearchBars extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.MainContainer}>
                    <Search style={styles.SearchStyle} width={25} height={25} />
                    <TextInput style={styles.SearchBar} placeholder={'지역, 상품, 상점명 검색'} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        marginTop: hp('4%'),
        backgroundColor: '#FFF',
    },
    MainContainer: {
        alignSelf: 'center',
    },
    SearchBar: {
        width: wp('87%'),
        height: hp('6%'),
        borderWidth: 1,
        borderRadius: scale(5),
        borderColor: '#c4c4c4',
        paddingLeft: 40,
    },
    SearchStyle: {
        position: 'absolute',
        marginTop: hp('1%'),
        marginLeft: wp('2%'),
    },
    TitleContainer: {
        marginTop: hp('6%'),
        marginLeft: wp('6%'),
    },
    LargeTItle: {
        fontSize: scale(18),
        fontWeight: 'bold'
    },
    SubTitle: {
        fontSize: scale(14),
        color: '#666666',
        marginTop: hp('2%'),
    }
})

export default SearchBars;