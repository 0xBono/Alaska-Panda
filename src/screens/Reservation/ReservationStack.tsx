import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {scale} from '../../constants/size';

type Props = {
  title: string;
};

const ReservationStack: React.SFC<Props> = props => (
  <View style={styles.container}>
    <Text style={styles.TextStyle}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
      height: scale(50)
    },
    TextStyle: {
      marginTop: scale(15),
      position: 'absolute',
      alignSelf: 'center',
      fontSize: 20,
    },
  });

export default ReservationStack;