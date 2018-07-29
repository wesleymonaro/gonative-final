import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { metrics, colors } from 'styles';

import styles from './styles';
// import HeaderRight from '../../components/HeaderRight';
// import HeaderLeft from '../../components/HeaderLeft';

export default class GameDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.game.name}`,
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center', fontWeight: 'bold' },
    headerStyle: {
      backgroundColor: colors.primary,
      paddingHorizontal: metrics.basePadding,
    },
    headerTintColor: colors.white,
    // headerLeft: <HeaderLeft navigation={navigation} />,
    // headerRight: <HeaderRight navigation={navigation} />,
  });

  render() {
    const { game } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://images.igdb.com/igdb/image/upload/t_thumb/ihb6yodrivxhckcrn8h5.jpg' }}
        />
      </View>
    );
  }
}
