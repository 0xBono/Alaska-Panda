import React from 'react';
import {StyleSheet, View, Text, TextInput, Image, ScrollView, SafeAreaView} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box';
import { scale } from '../constants/size';
import Plus from '../assets/plus';

class ShopInfo extends React.Component {
    state = {
        PasswordHide: true,
        isChecked: true,
    };
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                {/* 사업장 정보 */}
                <View style={styles.TitleContainer}>
                    <Text style={styles.LargeTitle}>사업장 정보</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>상호</Text>
                    <Text style={styles.Content}>하나언니</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>대표자</Text>
                    <Text style={styles.Content}>홍길동</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>전화번호</Text>
                    <Text style={styles.Content}>02-1234-1234</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>휴대전화 번호</Text>
                    <Text style={styles.Content}>02-1234-1234</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>홈페이지 주소</Text>
                    <Text style={styles.Content}>www.naver.com</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>사업자 등록 번호</Text>
                    <Text style={styles.Content}>02-1234-1234</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>사업자 유형</Text>
                    <Text style={styles.Content}>개인</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>업종 카테고리</Text>
                    <Text style={styles.Content}>서비스 > 스포츠 서비스 > 수영장</Text>
                </View>
                {/* 사업장 소개 */}
                <View style={styles.TitleContainer}>
                    <Text style={styles.LargeTitle}>사업장 소개</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>상세 소개</Text>
                </View>
                <View style={styles.SubContainer}>
                    <Text style={styles.Sub}>상세소개 입니다. 상세소개 입니다. 상세소개 입니다. 상세소개 입니다. 상세소개 입니다. 상세소개 입니다. 상세소개 입니다. 상세소개 입니다. 상세소개 입니다. 상세소개 입니다. 상세소개 입니다. 상세소개 입니다. 상세소개 입니다.</Text>
                </View>
                {/* 한줄 소개 */}
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>한줄 소개</Text>
                </View>
                <View style={styles.SubContainer}>
                    <Text style={styles.Sub}>한줄소개 입니다.</Text>
                </View>
                {/* 대표 키워드 */}
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>업종 카테고리</Text>
                    <Text style={styles.Tag}>일산맛집</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>무료 상단광고 지역</Text>
                    <Text style={styles.Content}>서울시 강남구</Text>
                </View>
                {/* 사업자 및 문서 */}
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>{'사업자 등록증 및\n기타문서 첨부'}</Text>
                </View>
                <View style={styles.DocuContainer}>
                    <View style={styles.Document}>
                        <Plus style={styles.Plus} width={40} height={40} />
                    </View>
                    <View style={styles.Document}>
                        <Plus style={styles.Plus} width={40} height={40} />
                    </View>
                </View>
                {/* 영업 시간 및 제공 서비스 */}
                <View style={styles.TitleContainer}>
                    <Text style={styles.LargeTitle}>영업시간 및 제공서비스</Text>
                </View>
                {/* 휴무 여부 */}
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>휴무 여부</Text>
                    <Text style={styles.Content}>연중무휴 아님</Text>
                </View>
                {/* 영업일 */}
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>영업일</Text>
                    <Text style={styles.Content}>월<Text style={{color: '#dc2125'}}> 화 수 목 금 토 </Text>일</Text>
                </View>
                {/* 영업 시간 */}
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>영업 시간</Text>
                    <Text style={styles.Content}>11:00 ~ 22:00</Text>
                </View>
                {/* 브레이크 타임 */}
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>브레이크 타임</Text>
                    <Text style={styles.Content}>15:00 ~ 17:00</Text>
                </View>
                {/* 정기휴무 */}
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>정기 휴무</Text>
                    <Text style={styles.Content}>2, 4번째 주 수요일, 공휴일</Text>
                </View>
                {/* 제공 서비스 */}
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>제공 서비스</Text>
                    {/* 체크박스1 */}
                    <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                        }}
                        isChecked={this.state.isChecked}
                        checkedImage={
                        <Image
                            source={require('../assets/checkbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        unCheckedImage={
                        <Image
                            source={require('../assets/uncheckbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        />
                        <Text style={styles.Check}>예약    </Text>
                    </View>
                    <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                        }}
                        isChecked={this.state.isChecked}
                        checkedImage={
                        <Image
                            source={require('../assets/checkbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        unCheckedImage={
                        <Image
                            source={require('../assets/uncheckbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        />
                        <Text style={styles.Check}>주차</Text>
                    </View>
                </View>
                {/* 체크박스2 */}
                <View style={styles.CheckContainer}>
                    <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                        }}
                        isChecked={this.state.isChecked}
                        checkedImage={
                        <Image
                            source={require('../assets/checkbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        unCheckedImage={
                        <Image
                            source={require('../assets/uncheckbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        />
                        <Text style={styles.Check}>배달/  </Text>
                    </View>
                    <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                        }}
                        isChecked={this.state.isChecked}
                        checkedImage={
                        <Image
                            source={require('../assets/checkbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        unCheckedImage={
                        <Image
                            source={require('../assets/uncheckbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        />
                        <Text style={styles.Check}>반려동물 동반</Text>
                    </View>
                </View>
                {/* 체크박스3 */}
                <View style={styles.CheckContainer}>
                    <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                        }}
                        isChecked={this.state.isChecked}
                        checkedImage={
                        <Image
                            source={require('../assets/checkbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        unCheckedImage={
                        <Image
                            source={require('../assets/uncheckbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        />
                        <Text style={styles.Check}>인터넷</Text>
                    </View>
                    <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                        }}
                        isChecked={this.state.isChecked}
                        checkedImage={
                        <Image
                            source={require('../assets/checkbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        unCheckedImage={
                        <Image
                            source={require('../assets/uncheckbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        />
                        <Text style={styles.Check}>장애인 편의</Text>
                    </View>
                </View>
                {/* 체크박스4 */}
                <View style={styles.CheckContainer}>
                    <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                        }}
                        isChecked={this.state.isChecked}
                        checkedImage={
                        <Image
                            source={require('../assets/checkbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        unCheckedImage={
                        <Image
                            source={require('../assets/uncheckbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        />
                        <Text style={styles.Check}>발렛파</Text>
                    </View>
                    <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                        }}
                        isChecked={this.state.isChecked}
                        checkedImage={
                        <Image
                            source={require('../assets/checkbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        unCheckedImage={
                        <Image
                            source={require('../assets/uncheckbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        />
                        <Text style={styles.Check}>포장</Text>
                    </View>
                </View>
                {/* 체크박스5 */}
                <View style={styles.CheckContainer}>
                    <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                        }}
                        isChecked={this.state.isChecked}
                        checkedImage={
                        <Image
                            source={require('../assets/checkbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        unCheckedImage={
                        <Image
                            source={require('../assets/uncheckbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        />
                        <Text style={styles.Check}>단체석</Text>
                    </View>
                    <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                        }}
                        isChecked={this.state.isChecked}
                        checkedImage={
                        <Image
                            source={require('../assets/checkbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        unCheckedImage={
                        <Image
                            source={require('../assets/uncheckbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        />
                        <Text style={styles.Check}>칸막이방(룸)</Text>
                    </View>
                </View>
                {/* 체크박스6 */}
                <View style={styles.CheckContainer}>
                    <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                        }}
                        isChecked={this.state.isChecked}
                        checkedImage={
                        <Image
                            source={require('../assets/checkbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        unCheckedImage={
                        <Image
                            source={require('../assets/uncheckbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        />
                        <Text style={styles.Check}>놀이방</Text>
                    </View>
                    <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                        }}
                        isChecked={this.state.isChecked}
                        checkedImage={
                        <Image
                            source={require('../assets/checkbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        unCheckedImage={
                        <Image
                            source={require('../assets/uncheckbox.png')}
                            style={{width: scale(15), height: scale(15)}}/>}
                        />
                        <Text style={styles.Check}>남녀화장실 구분</Text>
                    </View>
                </View>
                {/* 제공 서비스 */}
                <View style={styles.TextContainer}>
                    <Text style={styles.Main}>제공 서비스</Text>
                    <Text style={styles.Content}>배송비 무료</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        marginLeft: wp('6%'),
    },
    TitleContainer: {
        marginTop: hp('4%'),
    },
    LargeTitle: {
        fontSize: scale(18),
        fontWeight: 'bold',
        color: '#383838',
    },
    TextContainer: {
        flexDirection: 'row',
        marginTop: hp('2%'),
    },
    SubContainer: {
        marginTop: hp('2%'),
    },
    Main: {
        color: '#797979',
    },
    Content: {
        position: 'absolute',
        textAlign: 'left',
        color: '#484848',
        marginLeft: wp('30%'),
    },
    Sub: {
        width: wp('87%'),
        color: '#383838',
    },
    Tag: {
        position: 'absolute',
        marginTop: hp('-0.5%'),
        marginLeft: wp('30%'),
        width: wp('20%'),
        height: hp('4%'),
        borderWidth: 1,
        borderRadius: scale(20),
        borderColor: '#dc2125',
        textAlign: 'center',
        lineHeight: scale(24),
        color: '#dc2125',
    },
    DocuContainer: {
        flexDirection: 'row',
        marginTop: hp('2%'),
    },
    Document: {
        width: wp('40%'),
        height: hp('30%'),
        backgroundColor: "#e2e2e2",
        marginRight: wp('2%'),
    },
    Plus: {
        alignSelf: 'center',
        marginTop: hp('12%'),
    },
    CheckBoxContainer: {
        flexDirection: 'row',
        marginLeft: wp('13%'),
    },
    CheckContainer: {
        flexDirection: 'row',
        marginTop: hp('2%'),
        marginLeft: wp('16.5%'),
    },
    Check: {
        color: '#484848',
        marginTop: hp('-0.3%'),
        marginLeft: wp('2%'),
    },
})

export default ShopInfo;