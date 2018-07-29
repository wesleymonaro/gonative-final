import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors, metrics } from 'styles';

import HeaderRight from 'components/HeaderRight';

// pages
import Home from 'pages/home';
import SelectPlatforms from 'pages/selectPlatforms';
import SearchGames from 'pages/searchGames';
// import GameDetail from './pages/gameDetail';
import GameDetails from './pages/gameDetails';
import GameAbout from './pages/gameAbout';

const createNavigator = (hasPlatforms = false) => StackNavigator({
  Home: {
    screen: Home,
    // navigationOptions: ({ navigation }) => ({
    //   headerStyle: {
    //     paddingHorizontal: metrics.basePadding,
    //   },
    //   headerRight: <HeaderRight navigation={navigation} />,
    // }),
  },
  SelectPlatforms: { screen: SelectPlatforms },
  SearchGames: {
    screen: SearchGames,
    // navigationOptions: {
    //   title: 'Pesquisar jogos',
    //   headerBackTitle: null,
    // },
  },
  GameDetail: {
    screen: TabNavigator({
      About: { screen: GameAbout },
      Details: { screen: GameDetails },
    },
    {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        showIcon: false,
        showLabel: true,
        activeTintColor: colors.white,
        inactiveTintColor: colors.whiteTransparent,
        style: {
          backgroundColor: colors.primary,
        },
      },
    }),
  },
}, {
  initialRouteName: hasPlatforms ? 'GameDetail' : 'SelectPlatforms',
  // navigationOptions: ({ navigation }) => ({
  //   headerStyle: {
  //     paddingHorizontal: metrics.basePadding,
  //   },
  //   headerRight: <HeaderRight navigation={navigation} />,
  // }),
});

export default createNavigator;
