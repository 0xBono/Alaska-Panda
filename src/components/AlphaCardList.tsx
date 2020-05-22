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
import { scale } from '../constants/size';
import AlphaCard from '../components/AlphaCard';
import SearchBars from '../components/Search';


type State = NavigationState<{
  key: string;
  title: string;
}>;

const All = () => (
    <View style={{flex: 1}}>
      <SearchBars />
      <AlphaCard />
      <AlphaCard />
      <AlphaCard />
      <AlphaCard />
    </View>
);

const Complete = () => (
  <View style={{flex: 1}}>
      <SearchBars />
      <AlphaCard />
      <AlphaCard />
      <AlphaCard />
      <AlphaCard />
  </View>
);

const Ing = () => (
  <View style={{flex: 1}}>
      <SearchBars />
      <AlphaCard />
      <AlphaCard />
      <AlphaCard />
      <AlphaCard />
  </View>
);

const Reject = () => (
  <View style={{flex: 1}}>
      <SearchBars />
      <AlphaCard />
      <AlphaCard />
      <AlphaCard />
      <AlphaCard />
  </View>
);

export default class AlphaCardList extends React.Component<{}, State> {
  static title = 'Scrollable tab bar';
  static backgroundColor = '#FFF';
  static appbarElevation = 0;

  state = {
    index: 1,
    routes: [
      {key: 'All', title: '전체'},
      {key: 'Complete', title: '승인완료'},
      {key: 'Ing', title: '검토중'},
      {key: 'Reject', title: '승인거부'},
    ],
  };

  renderHeader = props => <TabBar style={{elevation:0, shadowOpacity : 0}} {...props} />;

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
    All: All,
    Complete: Complete,
    Ing: Ing,
    Reject: Reject,
  });

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <TabView
          style={{marginBottom: -35}}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.handleIndexChange}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#FFF',
  },
  tab: {
    width: wp('30%'),
    height: 70,
  },
  indicator: {
    height: 1,
    backgroundColor: '#FFF',
  },
  label: {
    fontWeight: '400',
    color: '#212121',
    textAlign: 'center',
  },
});
