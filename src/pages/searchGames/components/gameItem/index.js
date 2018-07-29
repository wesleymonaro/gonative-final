import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

class GameItem extends Component {
  state = {};

  // static propTypes = {
  //   repository: PropTypes.shape({
  //     name: PropTypes.string,
  //   }).isRequired,
  //   navigation: PropTypes.shape({
  //     navigate: PropTypes.func.isRequired,
  //   }),
  // };

  render() {
    const { game, navigation } = this.props;

    let cover = '';

    if (game.cover) {
      cover = `https://${game.cover.url.replace('//', '')}`;
    } else {
      cover = 'https://previews.123rf.com/images/konstantinks/konstantinks1507/konstantinks150700293/42317771-video-game-icon-isolated-on-white-background-vector-illustration-.jpg';
    }
    console.tron.log(cover);

    return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('GameDetail', { game })}>
        <View style={styles.avatarBox}>
          <Image style={styles.avatar} source={{ uri: cover }} />
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.gameTitle}>
            {game.name}
          </Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              {(game.release_dates) ? game.release_dates[0].y : ''}
            </Text>
          </View>
        </View>

      </TouchableOpacity>
    );
  }
}

export default withNavigation(GameItem);
