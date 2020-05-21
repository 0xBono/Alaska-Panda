import React from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView, ScrollView, Image} from 'react-native';
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
import Navigation from '../../components/Navigation';
import AlaskaList from '../../components/AlaskaList';
import ShopInfos from '../../components/ShopInfo';
import { scale } from '../../constants/size';

import Location from '../../assets/location';
import Heart from '../../assets/heart'

type State = NavigationState<{
    key: string;
    title: string;
  }>;

  const AlaskaLocal = () => (
    <View style={{flex: 1}}>
        <AlaskaList />
        <AlaskaList />
        <AlaskaList />
        <AlaskaList />
        <AlaskaList />
        <AlaskaList />
     </View>
);

const Story = () => (
    <View style={{flex: 1}}>
        <AlaskaList />
        <AlaskaList />
        <AlaskaList />
        <AlaskaList />
        <AlaskaList />
        <AlaskaList />
    </View>
);

const ShopInfo = () => (
    <View style={{flex: 1}}>
        <ShopInfos />
    </View>
);

class ZipHome extends React.Component<{}, State> {
    static title = 'Scrollable tab bar';
    static backgroundColor = '#FFF';
    static appbarElevation = 0;
  
    state = {
      index: 1,
      routes: [
        {key: 'AlaskaLocal', title: '알래스카 로컬'},
        {key: 'Story', title: '스토리'},
        {key: 'ShopInfo', title: '상점 정보'},
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
        AlaskaLocal: AlaskaLocal,
        Story: Story,
        ShopInfo: ShopInfo,
    });
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <Navigation title={'하나언니 ZIP'} />
                <ScrollView>
                <View style={styles.BannerContainer}>
                <Image
                    style={styles.Banner}
                    source={require('../../assets/Banner.png')}
                />
                </View>
                <View style={styles.ProfileContainer}>
                <Image
                    style={styles.Profile}
                    source={require('../../assets/Profile.png')}
                />
                </View>
                <View style={styles.InfoContainer}>
                    <Text style={{fontSize: scale(18), fontWeight: 'normal'}}>하나언니</Text>
                </View>
                <View style={styles.HeartContainer}>
                    <Heart width={20} height={20} />
                    <Text style={{color: '#ff6b6b', fontSize: scale(12), fontWeight: 'normal', marginTop: hp('-0.1%')}}>1234</Text>
                </View>
                <View style={styles.LocationContaindr}>
                    <Location />
                    <Text style={{color: '#e34d50', marginLeft: scale(10), fontSize: scale(12)}}>서울시 서초구</Text>
                    <Text style={{color: '#666666', marginLeft: scale(10), fontSize: scale(12)}}>서울시 서초구 양재대로 159</Text>
                </View>
                <View style={styles.introContainer}>
                    <Text style={{color: '#e34d50', fontWeight: 'normal'}}>안녕하세요 하나언니 쇼핑몰 입니다 :)</Text>
                </View>
                <TabView
                    navigationState={this.state}
                    renderScene={this.renderScene}
                    renderTabBar={this.renderTabBar}
                    onIndexChange={this.handleIndexChange}
                />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    BannerContainer: {
    },
    Banner: {
        width: wp('100%'),
        height: hp('30%'),
        resizeMode: 'cover',
    },
    Profile: {
        width: wp('33%'),
        height: hp('20%'),
        borderRadius: 500,
        resizeMode: 'cover',
    },
    ProfileContainer: {
        alignSelf: 'center',
        position: 'absolute',
        top: hp('20%'),
    },
    InfoContainer: {
        alignSelf: 'center',
        marginTop: hp('13%'),
    },
    HeartContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: hp('1%'),
    },
    LocationContaindr: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: hp('1%'),
    },
    introContainer: {
        alignSelf: 'center',
        marginTop: wp('2%'),
    },
    tabbar: {
        backgroundColor: '#FFF',
        marginTop: hp('3%'),
      },
      tab: {
        width: wp('33%'),
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
})

export default ZipHome;