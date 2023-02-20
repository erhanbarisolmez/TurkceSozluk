import { useIsFocused } from "@react-navigation/native";
import {StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Box from "../components/box";

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
function FavoriteViews() {
    return (  
      <Box as={SafeAreaView} flex={1}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
     <Text>Favoriler!</Text>
    </Box>
     );
}

export default FavoriteViews;