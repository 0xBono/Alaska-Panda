import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import StackNavigation from '../../components/StackNavigation';
import FooterButton from '../../components/FooterButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box'
import {scale} from '../../constants/size';

type Props = {};
class MoreDeclaration extends React.Component<Props> {
  constructor(props){
    super(props);
    this.state={
      isInfoChecked:true,
      DeclarationInput: '',
    }
  }
  render() {
    return (
    <SafeAreaView style={styles.Container}>
        <StackNavigation status={true} title={'게시물 신고'} />
        <ScrollView>
            <View style={styles.CheckBoxContainer}>
                <View style={styles.CheckContainer}>
                    <CheckBox
                        onClick={()=>{
                        this.setState({
                            isInfoChecked:!this.state.isInfoChecked
                        })
                        }}
                        isChecked={this.state.isInfoChecked}
                    />
                    <Text style={{ fontSize: scale(14), fontWeight: 'bold', marginTop: hp('0.2%'), marginLeft: wp('3%') }}>유해정보 신고</Text>
                </View>
                <View style={styles.CheckTextContainer}>
                    <Text style={{ fontSize: scale(14), fontWeight: '500' }}>{'불법적인 내용이거나, 서비스 이용 목적에 부합하지 않는\n게시물을 신고해주세요.'}</Text>
                </View>
            </View>
            <View style={styles.CheckBoxContainer}>
                <View style={styles.CheckContainer}>
                    <CheckBox
                        onClick={()=>{
                        this.setState({
                            isChecked:!this.state.isChecked
                        })
                        }}
                        isChecked={this.state.isChecked}
                    />
                    <Text style={{ fontSize: scale(14), fontWeight: 'bold', marginTop: hp('0.2%'), marginLeft: wp('3%') }}>권리침해 신고</Text>
                </View>
                <View style={styles.CheckTextContainer}>
                    <Text style={{ fontSize: scale(14), fontWeight: '500' }}>{'사생활 침해, 명예 훼손, 저작권 침해 등\n위와 같은 사항으로 피해를 받고 있는 경우 신고해 주세요.'}</Text>
                </View>
            </View>
            <View style={styles.InputContainer}>
                <Text>내용</Text>
                <TextInput style={{width: wp('80%'), marginTop: hp('1%'), paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#707070'}} placeholder="신고 사유를 입력해 주세요." placeholderTextColor="#707070" multiline />
                <Text style={{marginTop: hp('1%'), color: '#707070', fontSize: 10}}>신고하신 내용은 운영정책에 따라 처리되며, 허위 신고시 불이익을 받을 수 있습니다.</Text>
            </View>
        </ScrollView>
        <View style={styles.FooterContainer}>
            <ScrollView>
                <FooterButton title={'신고하기'} />
            </ScrollView>
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
    CheckBoxContainer: {},
    CheckContainer: {
        marginTop: hp('2%'),
        marginLeft: wp('6%'),
        flexDirection: 'row',
    },
    CheckTextContainer: {
        marginTop: hp('2%'),
        marginLeft: wp('6%'),
    },
    InputContainer: {
        marginTop: hp('2%'),
        marginLeft: wp('6%'),
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
})

export default MoreDeclaration;