import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import { TouchableOpacity, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


export default class HeaderLeft extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  openMenu = async () => {
    // await AsyncStorage.clear();

    // const resetAction = NavigationActions.reset({
    //   index: 0,
    //   actions: [
    //     NavigationActions.navigate({ routeName: 'Welcome' }),
    //   ],
    // });

    // const { navigation } = this.props;

    // navigation.navigate('SearchGames');
  }

  render() {
    return (
      <TouchableOpacity onPress={this.openMenu}>
        <Icon name="navicon" size={16} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
