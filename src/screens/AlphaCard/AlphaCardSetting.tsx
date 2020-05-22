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
import AlphaCardList from '../../components/AlphaCardList';
import AlphaCardCreate from '../../screens/AlphaCard/AlphaCardCreate'
import StackNavigation from '../../components/StackNavigation';
import FooterButton from '../../components/FooterButton';
import { scale } from '../../constants/size';


type State = NavigationState<{
  key: string;
  title: string;
}>;

const AlphaComplete = () => (
    <View style={{flex: 1}}>
        <AlphaCardList />
    </View>
);

const AlphaCreate = () => (
    <View style={{flex: 1}}>
        <AlphaCardCreate />
    </View>
);

export default class AlphaCardSetting extends React.Component<{}, State> {
  static title = 'Scrollable tab bar';
  static backgroundColor = '#FFF';
  static appbarElevation = 0;

  state = {
    index: 1,
    routes: [
      {key: 'AlphaComplete', title: '알파카드 승인'},
      {key: 'AlphaCreate', title: '알파카드 제작'},
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
    AlphaComplete: AlphaComplete,
    AlphaCreate: AlphaCreate,
  });

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <StackNavigation status={true} title={'알파카드 관리'} />
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
