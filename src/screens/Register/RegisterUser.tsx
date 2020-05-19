import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import StackNavigation from '../../components/StackNavigation';
import FooterButton from '../../components/FooterButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {scale} from '../../constants/size';

const radio_props = [
    {label: '남성', value: 0 },
    {label: '여성', value: 1 }
  ];

class RegisterUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: true,
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <StackNavigation status={true} title={'이용자 회원가입'} />
                <ScrollView>
                    <View style={styles.IContainer}>
                        <Text style={{fontWeight: 'bold', color: '#484848'}}>E-mail</Text>
                        <TextInput style={styles.TIStyle} />
                    </View>
                    <View style={styles.IContainer}>
                        <Text style={{fontWeight: 'bold', color: '#484848'}}>닉네임</Text>
                        <TextInput style={styles.TIStyle} />
                    </View>
                    <View style={styles.IContainer}>
                        <Text style={{fontWeight: 'bold', color: '#484848'}}>비밀번호</Text>
                        <TextInput secureTextEntry={true} style={styles.TIStyle} />
                    </View>
                    <View style={styles.IContainer}>
                        <Text style={{fontWeight: 'bold', color: '#484848'}}>비밀번호 확인</Text>
                        <TextInput secureTextEntry={true} style={styles.TIStyle} />
                    </View>
                    <View style={styles.IContainer}>
                        <Text style={{fontWeight: 'bold', color: '#484848'}}>생년월일</Text>
                        <TextInput style={styles.TIStyle} />
                    </View>
                    <View style={styles.RContainer}>
                    <Text style={{color: '#484848', marginRight: wp('5%')}}>성별</Text>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => {this.setState({value:value})}}
                        buttonColor={'#dc2125'}
                        formHorizontal={true}
                        buttonSize={10}
                        />
                    </View>
                    <View style={styles.PContainer}>
                        <Text style={{fontWeight: 'bold', color: '#484848'}}>활동지역</Text>
                        <View style={styles.TagContainer}>
                            <Text style={{color: "#dc2125", textAlign: 'center', lineHeight: scale(25)}}>서울 강남구</Text>
                        </View>
                    </View>
                    <View style={styles.PContainer}>
                        <Text style={{fontWeight: 'bold', color: '#484848'}}>관심업종</Text>
                        <View style={styles.TagContainer}>
                            <Text style={{color: "#dc2125", textAlign: 'center', lineHeight: scale(25)}}>서울 강남구</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.FContainer}>
                    <FooterButton title={'가입하기'} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
        maxHeight: hp('100%'),
    },
    IContainer: {
        alignSelf: 'center',
        marginTop: hp('4%'),
    },
    TIStyle: {
        width: wp('87%'),
        borderBottomWidth: 1,
        borderColor: '#484848',
    },
    RContainer: {
        flexDirection: 'row',
        marginTop: hp('5%'),
        marginLeft: wp('6%'),
    },
    TagContainer: {
        width: wp('25%'),
        height: hp('5%'),
        marginTop: hp('2%'),
        borderRadius: 100,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#dc2125"
    },
    PContainer: {
        marginTop: hp('5%'),
        marginLeft: wp('6%')
    },
    FContainer: {
        width: '100%',
        height: scale(70),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0, 
    },
})

export default RegisterUser;