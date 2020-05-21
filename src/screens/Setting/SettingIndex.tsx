import React from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView, ScrollView, KeyboardAvoidingView} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ToggleSwitch from 'toggle-switch-react-native';
import StackNavigation from '../../components/StackNavigation';
import FooterButton from '../../components/FooterButton';
import { scale } from '../../constants/size';

class SettingIndex extends React.Component {
    state = {
        isOnDefaultToggleSwitch: true,
        isOnLargeToggleSwitch: false,
        isOnBlueToggleSwitch: false
      };
    
      onToggle(isOn) {
        console.log("Changed to " + isOn);
      }
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <StackNavigation status={true} title={'설정'} />
                <View style={styles.MainContainer}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.LargeTitle}>리뷰알림</Text>
                        <Text style={styles.SubTitle}>게시물의 리뷰와 댓글에 대한 알림</Text>
                    </View>
                    <View style={styles.ToggleContainer}>
                        <ToggleSwitch
                            onColor="#ff6b6b"
                            isOn={this.state.isOnBlueToggleSwitch}
                            onToggle={isOnBlueToggleSwitch => {
                                this.setState({ isOnBlueToggleSwitch });
                                this.onToggle(isOnBlueToggleSwitch);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.Bar} />
                <View style={styles.MainContainer}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.LargeTitle}>알래스카 로컬 종료 알림</Text>
                        <Text style={styles.SubTitle}>알래스카 로컬 종료 2시간 전에 알려드립니다.</Text>
                    </View>
                    <View style={styles.Toggle2Container}>
                        <ToggleSwitch
                            onColor="#ff6b6b"
                            isOn={this.state.isOnBlueToggleSwitch}
                            onToggle={isOnBlueToggleSwitch => {
                                this.setState({ isOnBlueToggleSwitch });
                                this.onToggle(isOnBlueToggleSwitch);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.Bar} />
                <View style={styles.MainContainer}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.LargeTitle}>판다 셀렉트</Text>
                        <Text style={styles.SubTitle}>판다에서 제공하는 알림을 받아보세요!</Text>
                    </View>
                    <View style={styles.Toggle3Container}>
                        <ToggleSwitch
                            onColor="#ff6b6b"
                            isOn={this.state.isOnBlueToggleSwitch}
                            onToggle={isOnBlueToggleSwitch => {
                                this.setState({ isOnBlueToggleSwitch });
                                this.onToggle(isOnBlueToggleSwitch);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.Bar} />
                <View style={styles.MainContainer}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.LargeTitle}>팝업 알림 표시</Text>
                        <Text style={styles.SubTitle}>게시물의 리뷰와 댓글에 대한 알림</Text>
                    </View>
                    <View style={styles.Toggle4Container}>
                        <ToggleSwitch
                            onColor="#ff6b6b"
                            isOn={this.state.isOnBlueToggleSwitch}
                            onToggle={isOnBlueToggleSwitch => {
                                this.setState({ isOnBlueToggleSwitch });
                                this.onToggle(isOnBlueToggleSwitch);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.Bar} />
                <View style={styles.LeaveContainer}>
                    <Text style={styles.LargeTitle}>회원탈퇴</Text>
                </View>
                <View style={styles.Bar} />
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
        marginTop: hp('2%'),
        marginLeft: wp('6%'),
        flexDirection: 'row',
    },
    TextContainer: {},
    ToggleContainer: {
        marginTop: hp('1%'),
        marginLeft: wp('28%'),
    },
    Toggle2Container: {
        marginTop: hp('1%'),
        marginLeft: wp('12%'),
    },
    Toggle3Container: {
        marginTop: hp('1%'),
        marginLeft: wp('22%'),
    },
    Toggle4Container: {
        marginTop: hp('1%'),
        marginLeft: wp('28.5%'),
    },
    LargeTitle: {
        fontSize: scale(16),
        fontWeight: 'bold',
    },
    SubTitle: {
        color: '#707070',
    },
    Bar: {
        alignSelf: 'center',
        marginTop: hp('2%'),
        width: wp('87%'),
        height: hp('0.1%'),
        backgroundColor: '#C4C4C4',
    },
    LeaveContainer: {
        marginTop: hp('30%'),
        marginLeft: wp('6%'),
    },
})

export default SettingIndex;