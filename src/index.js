import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import './config/DevToolsConfig';
import './config/ReactotronConfig';

import createNavigator from 'routes';

export default class App extends Component {
  state = {
    // userChecked: false,
    // userLogged: false,
    hasPlatforms: false,
  }

  async componentDidMount() {
    // const platforms = await AsyncStorage.getItem('@AppGames:platforms');
    const platforms = true;
    this.appLoaded(platforms);
  }

  appLoaded = (platforms) => {
    this.setState({
      hasPlatforms: !!platforms,
    });
  }

  render() {
    const { hasPlatforms } = this.state;

    if (!hasPlatforms) return null;

    const Routes = createNavigator(hasPlatforms);

    return <Routes />;
  }
}
