import React from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView, ScrollView} from 'react-native';
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
import Chart from '../../components/Chart';
import PieCharts from '../../components/PieChart';
import StackNavigation from '../../components/StackNavigation';
import FooterButton from '../../components/FooterButton';
import ReList from '../../components/ReList';
import { scale } from '../../constants/size';


type State = NavigationState<{
  key: string;
  title: string;
}>;

const List = () => (
    <View style={{flex: 1}}>
        <Text style={{marginTop: hp('4%'), alignSelf: 'center', fontSize: scale(16), fontWeight: 'bold'}}>총 123,456명</Text>
        <View style={{alignSelf: 'center', marginTop: hp('2%')}}>
            <ScrollView>
                <ReList />
                <ReList />
                <ReList />
                <ReList />
                <ReList />
                <ReList />
                <ReList />
                <ReList />
                <ReList />
                <ReList />
            </ScrollView>
        </View>
    </View>
);

const Analysis = () => (
    <View style={{flex: 1}}>
        <ScrollView>
            <Text style={{marginTop: hp('4%'), alignSelf: 'center', fontSize: scale(16), fontWeight: 'bold'}}>총 123,456명</Text>
            <View style={{alignSelf: 'center', marginTop: hp('2%')}}>
                <Text>성비</Text>
                <Chart />
                <Text>연령비 (%/Age)</Text>
                <Chart />
                <Text>지역비 (%/지역)</Text>
                <Chart />
            </View>
        </ScrollView>
    </View>
);

export default class RegularList extends React.Component<{}, State> {
  static title = 'Scrollable tab bar';
  static backgroundColor = '#FFF';
  static appbarElevation = 0;

  state = {
    index: 1,
    routes: [
      {key: 'RegularList', title: '단골 리스트'},
      {key: 'Analysis', title: '통계'},
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
    RegularList: List,
    Analysis: Analysis,
  });

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <StackNavigation status={true} title={'단골손님'} />
        <TabView
          style={{marginBottom: -35}}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.handleIndexChange}
        />
        <View style={styles.FooterContainer}>
          <FooterButton title={'판다 셀렉트'} />
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
