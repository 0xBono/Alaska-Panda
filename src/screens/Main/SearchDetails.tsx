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
import SearchCard from '../../components/SearchCard';
import { scale } from '../../constants/size';


type State = NavigationState<{
  key: string;
  title: string;
}>;

const Local = () => (
    <View style={{flex: 1}}>
        <SearchCard />
    </View>
);

const Shop = () => (
    <View style={{flex: 1}}>
    </View>
);

export default class SearchDetails extends React.Component<{}, State> {
  static title = 'Scrollable tab bar';
  static backgroundColor = '#FFF';
  static appbarElevation = 0;

  state = {
    index: 1,
    routes: [
      {key: 'Local', title: '알릴레오 로컬'},
      {key: 'Shop', title: '상점'},
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
    Local: Local,
    Shop: Shop,
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
