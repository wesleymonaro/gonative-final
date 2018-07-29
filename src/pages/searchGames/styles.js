import { StyleSheet } from 'react-native';
import { metrics, general, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
    padding: metrics.basePadding,
  },
  content: {
    flex: 1,
    width: metrics.screenWidth,
    padding: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default styles;
