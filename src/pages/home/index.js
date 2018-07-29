import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { metrics, colors } from 'styles';

import styles from './styles';
import HeaderRight from '../../components/HeaderRight';
import HeaderLeft from '../../components/HeaderLeft';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center', fontWeight: 'bold' },
    headerStyle: {
      backgroundColor: colors.primary,
      paddingHorizontal: metrics.basePadding,
    },
    headerTintColor: colors.white,
    headerLeft: <HeaderLeft navigation={navigation} />,
    headerRight: <HeaderRight navigation={navigation} />,
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text>
          Hello Home
        </Text>
      </View>
    );
  }
}
