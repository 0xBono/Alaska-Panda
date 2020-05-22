import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box';

import StackNavigation from '../../components/StackNavigation';
import {scale} from '../../constants/size';

import Facebook from '../../assets/facebook';
import Google from '../../assets/google';
import Kakao from '../../assets/kakao';
import Naver from '../../assets/naver';

class UserLogin extends Component {
  state = {
    PasswordHide: true,
    isChecked: true,
  };
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.Container}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('RegisterMain')}>
          <StackNavigation status={true} title={'로그인'} />
        </TouchableOpacity>
        <View style={styles.InputContainer}>
        <Text style={{color: '#818181'}}>E-mail</Text>
          <TextInput
            style={styles.InputStyle}
          />
        </View>
        <View style={styles.InputContainer}>
        <Text style={{color: '#818181'}}>Password</Text>
          <TextInput
            style={styles.InputStyle}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.AutoContainer}>
          <CheckBox
            style={{width: 100, height: 100}}
            onClick={() => {
              this.setState({
                isChecked: !this.state.isChecked,
              });
            }}
            isChecked={this.state.isChecked}
            checkedImage={
              <Image
                source={require('../../assets/checkbox.png')}
                style={{width: scale(25), height: scale(25)}}
              />
            }
            unCheckedImage={
              <Image
                source={require('../../assets/uncheckbox.png')}
                style={{width: scale(25), height: scale(25)}}
              />
            }
          />
          <TouchableOpacity>
            <Text
              style={{
                marginTop: hp('0.4%'),
                marginLeft: wp('-15%'),
                fontSize: scale(14),
              }}>
              이메일주소 기억하기
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.TextStyle}>로그인</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.SocialTextStyle}>SNS 로그인</Text>
        <View style={styles.socialContainer}>
          <View style={styles.SocialIcons}>
            <Facebook width={50} height={50} />
          </View>
          <View style={styles.SocialIcons}>
            <Google width={50} height={50} />
          </View>
          <View style={styles.SocialIcons}>
            <Naver width={50} height={50} />
          </View>
          <View style={styles.SocialIcons}>
            <Kakao width={50} height={50} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  InputContainer: {
    marginTop: hp('6%'),
    marginLeft: wp('6%'),
  },
  InputStyle: {
    width: wp('88%'),
    height: hp('8%'),
    padding: 10,
    borderBottomColor: '#DC2125',
    borderBottomWidth: 1,
    fontSize: scale(13),
  },
  InputIcons: {
    position: 'absolute',
    left: wp('75%'),
  },
  AutoContainer: {
    flexDirection: 'row',
    marginTop: hp('3%'),
    marginLeft: wp('6%'),
  },
  ButtonContainer: {
    alignSelf: 'center',
    width: wp('88%'),
    height: hp('10%'),
    backgroundColor: '#DC2125',
    borderRadius: 10,
    marginTop: hp('-5%'),
  },
  TextStyle: {
    textAlign: 'center',
    lineHeight: hp('10%'),
    fontSize: scale(18),
    color: '#FFFFFF',
  },
  InfoContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  InfoTextStyle: {
    fontSize: scale(14),
    color: '#666666',
    padding: 15,
  },
  SocialTextStyle: {
    alignSelf: 'center',
    marginTop: hp('3%'),
    fontSize: scale(16),
  },
  socialContainer: {
    flexDirection: 'row',
    marginLeft: wp('6%'),
  },
  SocialIcons: {
    marginTop: hp('5%'),
    alignItems: 'center',
    paddingRight: scale(43),
  },
});

export default UserLogin;
