import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

import Brand from '../../assets/TextLogo';

type Props = {
    navigation : any
}

class ReservationApply extends React.Component<Props> {
    componentWillMount() {
        this.setState({
          email: '',
          name: '',
        })
    }
    onServerPost = () =>  {
        fetch('http://54.180.134.156/reservation/insertReservation/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                name: this.state.name,
            })
        })
        .then( response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
    };
    render() {
        const { navigation } = this.props;
        console.log("asd");
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.BrandContainer}>
                    <Brand style={{marginLeft: wp('6%')}} width={200} height={50} />
                </View>
                <View style={styles.InputContainer}>
                    <Text style={{marginTop: hp('5%'), color: '#DB2525', fontWeight: 'bold'}}>이메일 💌</Text>
                    <TextInput style={styles.InputStyle} placeholder="이메일을 입력해주세요." onChangeText={(email) => {this.setState({email: email})}}/>
                </View>
                <View style={styles.InputContainer}>
                    <Text style={{marginTop: hp('5%'), color: '#DB2525', fontWeight: 'bold'}}>성함 💁🏻</Text>
                    <TextInput style={styles.InputStyle} placeholder="성함을 입력해주세요." onChangeText={(name) => {this.setState({name: name})}}/>
                </View>
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.8} onPress={() => this.onServerPost()}>
                        <Text style={styles.ButtonTextStyle}>신청 완료</Text>
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
    ButtonContainer: {
        marginLeft: wp('6%'),
    },
    InputContainer: {
        marginTop: hp('3%'),
        marginLeft: wp('6%'),
    },
    InputStyle: {
        width: wp('87%'),
        height: hp('7%'),
        borderBottomWidth: 1,
        borderColor: '#DB2525',
    },
    ButtonStyle: {
        marginTop: hp('30%'),
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

export default ReservationApply;