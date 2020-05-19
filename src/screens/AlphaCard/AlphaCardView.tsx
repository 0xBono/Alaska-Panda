import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import StackNavigation from '../../components/StackNavigation';
import FooterButton from '../../components/FooterButton';
import { scale } from '../../constants/size';

class AlphaCardView extends Component {
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <StackNavigation status={true} title={'알파카드 승인 요청'} />
                <View style={styles.MainContainer}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.CardContainer}>
                            <Text style={styles.TextContainer}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.FooterContainer}>
                    <FooterButton title={'승인 요청'} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    MainContainer: {
        marginTop: hp('4%'),
        marginLeft: wp('6%'),
    },
    CardContainer: {
        width: wp('87%'),
        height: hp('20%'),
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#c1c1c1"
    },
    TextContainer: {
        fontSize: scale(60),
        fontWeight: '100',
        color: '#c1c1c1',
        textAlign: 'center',
        lineHeight: hp('18%'),
    },
    FooterContainer: {
        width: '100%',
        height: scale(70),
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
});

export default AlphaCardView;