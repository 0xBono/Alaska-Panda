import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import StackNavigation from '../../components/StackNavigation';
import FooterButton from '../../components/FooterButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box'
import {scale} from '../../constants/size';

import Icons1 from '../../assets/Icons1';
import Icons2 from '../../assets/Icons2';
import Icons3 from '../../assets/Icons3';
import Icons4 from '../../assets/Icons4';

class MoreIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: true,
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <StackNavigation status={true} title={'더보기'} />
                <ScrollView>
                    <View style={styles.WContainer}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.SContainer}>
                                <View style={styles.STContainer}>
                                    <Text style={styles.TStyle}>공지사항</Text>
                                    <Icons1 style={styles.IStyle} width={25} height={25} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Bar} />
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.SContainer}>
                                <View style={styles.STContainer}>
                                    <Text style={styles.TStyle}>이벤트</Text>
                                    <Icons2 style={styles.IStyle} width={25} height={25} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Bar} />
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.SContainer}>
                                <View style={styles.STContainer}>
                                    <Text style={styles.TStyle}>포인트 관리</Text>
                                    <Icons3 style={styles.IStyle} width={25} height={25} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Bar} />
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.SContainer}>
                                <View style={styles.STContainer}>
                                    <Text style={styles.TStyle}>설정</Text>
                                    <Icons4 style={styles.IStyle} width={25} height={25} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.CEContainer}>
                        <View style={styles.CETContainer}>
                            <Text style={styles.TStyle}>고객센터</Text>
                            <Text style={styles.SubTitle}>상담원 연결과 1:1 이메일을 통해 질문에 대한 답변을 빠르게 받아보세요.</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.8}>
                                <View style={styles.ButtonContainer}>
                                    <Text style={styles.ButtonTextStyle}>서비스 문의</Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.FIContainer}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.SContainer}>
                                <View style={styles.STContainer}>
                                    <Text style={styles.TStyle}>로그아웃</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Bar} />
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.SContainer}>
                                <View style={styles.STContainer}>
                                    <Text style={styles.TStyle}>약관정보 및 버전</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Bar} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#E2E2E2',
    },
    TContainer: {
        marginTop: hp('2%'),
        marginLeft: wp('6%'),
    },
    TStyle: {
        marginTop: hp('3.5%'),
        fontSize: scale(14),
    },
    SContainer: {
        alignSelf: 'center',
        width: wp('87%'),
    },
    STStyle: {
        fontSize: scale(12),
        color: "#707070"
    },
    STContainer: {},
    IStyle: {
        position: 'absolute',
        left: wp('78%'),
        top: hp('3%'),
    },
    FContainer: {
        width: '100%',
        height: scale(70),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0, 
    },
    CContainer: {
        marginLeft: wp('6%'),
        flexDirection: 'row',
    },
    CTstyle: {
        marginTop: hp('0.3%'),
        marginLeft: wp('4%'),
        fontWeight: 'bold',
        color: '#383838',
    },
    Bar: {
        marginTop: hp('4%'),
        alignSelf: 'center',
        width: wp('87%'),
        height: hp('0.1%'),
        backgroundColor: '#c4c4c4',
    },
    WContainer: {
        backgroundColor: '#FFF',
        height: hp('45%'),
    },
    FIContainer: {
        marginTop: hp('2%'),
        backgroundColor: '#FFF',
        height: hp('28%'),
    },
    ButtonContainer: {
        marginTop: hp('5%'),
        alignSelf: 'center',
        width: wp('87%'),
        height: hp('10%'),
        backgroundColor: "#dc2125",
        borderRadius: 5,
    },
    ButtonTextStyle: {
        fontSize: scale(18),
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        lineHeight: scale(60),
    },
    LargeTitle: {
        fontSize: scale(16),
        fontWeight: 'bold',
    },
    SubTitle: {
        color: '#707070',
        fontSize: scale(10),
    },
    CETContainer: {
        marginLeft: wp('6%'),
    },
    CEContainer: {
        marginTop: hp('2%'),
        width: wp('100%'),
        height: hp('28%'),
        backgroundColor: '#FFF',
    }
})

export default MoreIndex;