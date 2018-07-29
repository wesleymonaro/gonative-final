import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors, metrics } from 'styles';

import HeaderRight from 'components/HeaderRight';

// pages
import Home from 'pages/home';
import SelectPlatforms from 'pages/selectPlatforms';
// import Organizations from 'pages/organizations';

const createNavigator = (hasPlatforms = false) => StackNavigator({
  Home: { screen: Home },
  SelectPlatforms: { screen: SelectPlatforms },
  // User: {
  //   screen: TabNavigator({
  //     Repositories: { screen: Repositories },
  //     Organizations: { screen: Organizations },
  //   }, {
  //     tabBarPosition: 'bottom',
  //     tabBarOptions: {
  //       showIcon: true,
  //       showLabel: false,
  //       activeTintColor: colors.white,
  //       inactiveTintColor: colors.whiteTransparent,
  //       style: {
  //         backgroundColor: colors.secundary,
  //       },
  //     },
  //   }),
  // },
}, {
  initialRouteName: hasPlatforms ? 'Home' : 'SelectPlatforms',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      paddingHorizontal: metrics.basePadding,
    },
    headerRight: <HeaderRight navigation={navigation} />,
  }),
});

export default createNavigator;
