import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import { TouchableOpacity, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


export default class HeaderRight extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  goToSearch = async () => {
    // await AsyncStorage.clear();

    // const resetAction = NavigationActions.reset({
    //   index: 0,
    //   actions: [
    //     NavigationActions.navigate({ routeName: 'Welcome' }),
    //   ],
    // });

    const { navigation } = this.props;

    navigation.navigate('SearchGames');
  }

  render() {
    return (
      <TouchableOpacity onPress={this.goToSearch}>
        <Icon name="search" size={16} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
