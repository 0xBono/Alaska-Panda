import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native';
import StackNavigation from '../../components/StackNavigation';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import Markdown from 'react-native-markdown-display';

const Contents = `# h1 Heading 8-)

**This is some bold text!**

This is normal text
`;


const MoreNoticeDetails: React.FC<{}> = () => (
    <SafeAreaView style={styles.Container}>
        <StackNavigation status={true} title={'공지사항'} />
        <ScrollView>
            <View style={styles.TitleContainer}>
                <Text numberOfLines={1} style={{ width: '80%', fontWeight: 'bold' }}>테스트 공지사항입니다. 테스트입니다. 확인 부탁드립니다</Text>
                <Text style={{ marginTop: hp('1%'), color: '#C8C8C8' }}>2020. 11. 22 목요일</Text>
            </View>
            <View style={styles.ContentsContainer}>
                <Markdown>{Contents}</Markdown>
            </View>
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    TitleContainer: {    
        marginTop: hp('4%'),
        marginLeft: wp('6%'),
    },
    ContentsContainer: {
        marginTop: hp('4%'),
        marginLeft: wp('6%'),
    },
});

export default MoreNoticeDetails;