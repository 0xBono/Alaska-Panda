import React from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView, ScrollView, KeyboardAvoidingView} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    TabView,
    TabBar,
    SceneMap,
    NavigationState,
    SceneRendererProps,
} from 'react-native-tab-view';
import StackNavigation from '../../components/StackNavigation';
import FooterButton from '../../components/FooterButton';
import { scale } from '../../constants/size';


type State = NavigationState<{
  key: string;
  title: string;
}>;

const ImageApply = () => (
    <View style={{flex: 1}}>
        <View style={{marginTop: hp('2%')}}>
            <Text style={{marginLeft: wp('6%'), marginTop: hp('2%'), color: '#797979'}}>알파카드 제목</Text>
            <TextInput style={{width: wp('87%'), height: hp('8%'), borderBottomWidth: 1, borderBottomColor: '#797979', alignSelf: 'center', fontSize: scale(14)}} />
        </View>
        <View style={{marginTop: hp('2%')}}>
            <Text style={{marginLeft: wp('6%'), marginTop: hp('2%'), color: '#797979'}}>알파카드 제목</Text>
            <TextInput style={{width: wp('87%'), height: hp('8%'), borderBottomWidth: 1, borderBottomColor: '#797979', alignSelf: 'center', fontSize: scale(14)}} />
        </View>
        <View style={{width: wp('87%'), height: hp('20%'), backgroundColor: '#e2e2e2', alignSelf: 'center', marginTop: wp('6%')}}>
          <Text style={{alignSelf: 'center', marginTop: hp('4%'), fontSize: scale(50), fontWeight: '100', color: '#FFF'}}>+</Text>
        </View>
    </View>
);

const VideoApply = () => (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView>
        <View style={{marginTop: hp('2%')}}>
            <Text style={{marginLeft: wp('6%'), marginTop: hp('2%'), color: '#797979'}}>알파카드 제목</Text>
            <TextInput style={{width: wp('87%'), height: hp('8%'), borderBottomWidth: 1, borderBottomColor: '#797979', alignSelf: 'center', fontSize: scale(14)}} />
        </View>
        <View style={{marginTop: hp('2%')}}>
            <Text style={{marginLeft: wp('6%'), marginTop: hp('2%'), color: '#797979'}}>알파카드 제목</Text>
            <TextInput style={{width: wp('87%'), height: hp('8%'), borderBottomWidth: 1, borderBottomColor: '#797979', alignSelf: 'center', fontSize: scale(14)}} />
        </View>
        <View style={{width: wp('87%'), height: hp('20%'), backgroundColor: '#e2e2e2', alignSelf: 'center', marginTop: wp('6%')}}>
          <Text style={{alignSelf: 'center', marginTop: hp('4%'), fontSize: scale(50), fontWeight: '100', color: '#FFF'}}>▶︎</Text>
        </View>
        <View style={{marginTop: hp('2%')}}>
            <TextInput style={{width: wp('87%'), height: hp('8%'), borderBottomWidth: 1, borderBottomColor: '#797979', alignSelf: 'center', fontSize: scale(14)}} />
        </View>
      </ScrollView>
  </KeyboardAvoidingView>
);

export default class AlphaCardApply extends React.Component<{}, State> {
  static title = 'Scrollable tab bar';
  static backgroundColor = '#FFF';
  static appbarElevation = 0;

  state = {
    index: 1,
    routes: [
      {key: 'ImageApply', title: '이미지형'},
      {key: 'VideoApply', title: '동영상형'},
    ],
  };

  private handleIndexChange = (index: number) =>
    this.setState({
      index,
    });

  private renderTabBar = (
    props: SceneRendererProps & {navigationState: State},
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  private renderScene = SceneMap({
    ImageApply: ImageApply,
    VideoApply: VideoApply,
  });

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <StackNavigation status={true} title={'알파카드 승인 요청'} />
        <TabView
          style={{marginBottom: -35}}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.handleIndexChange}
        />
        <View style={styles.FooterContainer}>
          <FooterButton title={'완료'} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#FFF',
  },
  tab: {
    width: wp('50%'),
    height: 70,
  },
  indicator: {
    height: 5,
    backgroundColor: '#dc2125',
  },
  label: {
    fontWeight: '400',
    color: '#212121',
    textAlign: 'center',
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
