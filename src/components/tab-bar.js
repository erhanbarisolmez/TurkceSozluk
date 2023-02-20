import React from 'react';
import Box from './box';
import Button from './button';
// Icon
import {Search, Bookmark, Rotate, Search2} from './icons';
// Theme
import theme from '../utils/theme';
function TabBar({ state, descriptors, navigation }) {
  return (
    <Box
   bg='white'
    flexDirection="row"
 
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return label === 'Ara' ? (
        // search button
        <Box key={label}
          padding={15}
          mt={-15}
          borderRadius="full"
          bg="white"
        >
            <Button
            size={56}
            bg={'red'}
            borderRadius="full"
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Search color='white' />
          </Button> 
        </Box>
        ) : 
        // tab-button
        <Button 
        key={label}
        height={56}
        pt={6}
        flex={1}
        onPress={onPress}
        onLongPress={onLongPress}
        flexDirection="column"
      >
        {label === "Geçmiş" && <Rotate color={isFocused ? theme.colors.red : theme.colors.textLight}/>}
        {label === "Favori" && <Bookmark color={isFocused ? theme.colors.red : theme.colors.textLight}/>}

        {/* indicator */}
        <Box size={4} bg={isFocused ? 'red' : 'white'}mt={6} borderRadius="full" />
      </Button> 
      })}
    </Box>
  );
}


export default TabBar;