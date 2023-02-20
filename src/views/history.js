import {Text} from 'react-native';
import Box from '../components/box';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
function HistoryViews() {
  const insets = useSafeAreaInsets();

  return (
    <Box as={SafeAreaView} flex={1}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <Text>Geçmiş</Text>
    </Box>
  );
}

export default HistoryViews;
