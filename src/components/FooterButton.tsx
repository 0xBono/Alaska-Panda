import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { scale } from '../constants/size';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
  title: string;
};

const FooterButton: React.SFC<Props> = props => (
  <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#DC2125',
    width: wp('100%'),
    height: hp('15%'),
  },
  text: {
    textAlign: 'center',
    fontSize: scale(20),
    lineHeight: scale(70),
    color: '#fff',
  },
});

export default FooterButton;
