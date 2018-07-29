import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    // marginHorizontal: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    width: metrics.screenWidth - (metrics.basePadding * 2),
    padding: metrics.basePadding,
  },
  avatarBox: {
    flex: 1.5,
  },
  infoBox: {
    flex: 5,
    paddingLeft: metrics.baseMargin,
    justifyContent: 'center',
  },

  gameTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },

  info: {
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
    alignItems: 'center',
  },

  infoText: {
    color: colors.regular,
    fontSize: 12,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default styles;
