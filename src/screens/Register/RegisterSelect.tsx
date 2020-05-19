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

import Cart from '../../assets/cart';
import Shop from '../../assets/shop';

class RegisterSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: true,
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <StackNavigation status={true} title={'회원가입'} />
                <ScrollView>
                    <View style={styles.TContainer}>
                        <Text style={styles.TStyle}>회원 유형을 선택해주세요.</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.SContainer}>
                            <View style={styles.STContainer}>
                                <Text style={styles.TStyle}>이용자 회원가입</Text>
                                <Text style={styles.STStyle}>{'주변에 있는 알래스카판다 가입 상점으로부터\n다양한 혜택을 받아보세요.'}</Text>
                                <Cart style={styles.IStyle} width={30} height={30} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.SContainer}>
                            <View style={styles.STContainer}>
                                <Text style={styles.TStyle}>상점 회원가입</Text>
                                <Text style={styles.STStyle}>{'지역 내 이용자들에게 상점의 할인, 이벤트 등\n다양한 정보를 알려 상점의 가치를 높여보세요.'}</Text>
                                <Shop style={styles.IStyle} width={30} height={30} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.CContainer}>
                        <CheckBox
                            onClick={()=>{
                            this.setState({isChecked:!this.state.isChecked})}}
                            isChecked={this.state.isChecked}
                        />
                        <Text style={styles.CTstyle}>모든 약관에 동의합니다.</Text>
                        </View>
                    <View style={styles.CContainer}>
                        <CheckBox
                            onClick={()=>{
                            this.setState({isChecked:!this.state.isChecked})}}
                            isChecked={this.state.isChecked}
                        />
                        <Text style={styles.CTstyle}>알래스카판다 이용약관 (필수)</Text>
                    </View>
                    <View style={styles.CContainer}>
                        <CheckBox
                            onClick={()=>{
                            this.setState({isChecked:!this.state.isChecked})}}
                            isChecked={this.state.isChecked}
                        />
                        <Text style={styles.CTstyle}>개인정보 수집 및 이용 동의 (필수)</Text>
                    </View>
                    <View style={styles.CContainer}>
                        <CheckBox
                            onClick={()=>{
                            this.setState({isChecked:!this.state.isChecked})}}
                            isChecked={this.state.isChecked}
                        />
                        <Text style={styles.CTstyle}>위치정보 수집 및 이용 동의 (선택)</Text>
                    </View>
                    <View style={styles.CContainer}>
                        <CheckBox
                            onClick={()=>{
                            this.setState({isChecked:!this.state.isChecked})}}
                            isChecked={this.state.isChecked}
                        />
                        <Text style={styles.CTstyle}>알래스카판다 알림 및 광고메시지 수신 동의 (선택)</Text>
                    </View>
                    <View style={styles.CContainer}>
                        <CheckBox
                            onClick={()=>{
                            this.setState({isChecked:!this.state.isChecked})}}
                            isChecked={this.state.isChecked}
                        />
                        <Text style={styles.CTstyle}>이용자 정보 추가 수집 동의 (선택)</Text>
                    </View>
                </ScrollView>
                <View style={styles.FContainer}>
                    <FooterButton title={'다음'} />
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
    TContainer: {
        marginTop: hp('2%'),
        marginLeft: wp('6%'),
    },
    TStyle: {
        fontSize: scale(16),

        fontWeight: 'bold',
    },
    SContainer: {
        alignSelf: 'center',
        marginTop: hp('2%'),
        width: wp('87%'),
        height: hp('15%'),
        borderRadius: 3.5,
        borderWidth: 1,
        borderColor: "#c4c4c4"
    },
    STStyle: {
        marginTop: hp('2%'),
        fontSize: scale(12),
        color: "#707070"
    },
    STContainer: {
        marginTop: hp('2%'),
        marginLeft: wp('5%'),
    },
    IStyle: {
        position: 'absolute',
        left: wp('70%'),
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
        marginTop: hp('2%'),
        marginLeft: wp('6%'),
        flexDirection: 'row',
    },
    CTstyle: {
        marginTop: hp('0.3%'),
        marginLeft: wp('4%'),
        fontWeight: 'bold',
        color: '#383838',
    },
})

export default RegisterSelect;