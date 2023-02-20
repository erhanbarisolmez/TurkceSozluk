// In App.js in a new project
import * as React from 'react';
// Navigation
import {ThemeProvider} from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Views import
import FavoriteViews from './views/favorite';
import HistoryViews from './views/history';
import SearchView from './views/search';
import DetailViews from './views/detail';
// Tab-bar 
import TabBar from './components/tab-bar';
//Theme
import theme from './utils/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Icons
import {More, Left} from './components/icons';
import Button from './components/button';
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign:'center'
      }}
    >
      <HomeStack.Screen 
      name="Search"
      component={SearchView}
      options={()=>{
        return{
          headerMode: 'none',
          header: () => {}
        }
      }}
      />
      <HomeStack.Screen 
      name="Detail" 
      component={DetailViews} 
      options={({route, navigation}) => {
        return {
          title:route.params?.title,
          headerStyle:{
            backgroundColor: theme.colors.softRed,
          },
          headerLeft: () =>( 
          <Button
            px={20}
            ml={-20}
            height={58}
          >
            <Left color={theme.colors.textDark}
            onPress={()=> navigation.navigate('Search')}
            />
          </Button>
          ),
          headerRight: () => (
            <Button
            height={58}
            >
            <More color = {theme.colors.textDark}
             onPress={()=> navigation.navigate('Search')}
             />
            </Button>
            
          ) 
        }
      }}
      />
    </HomeStack.Navigator>
  );
}
export default function TabNavigator() {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
      <NavigationContainer>
      <Tab.Navigator
      
        screenOptions={{ headerShown: false }}
        initialRouteName="Ara"
        tabBar={props => <TabBar {...props} />}>
        <Tab.Screen
        name="Geçmiş" component={HistoryViews}
        />
        <Tab.Screen 
        name="Ara" component={SearchStack}
        />
        <Tab.Screen name="Favori" component={FavoriteViews} />
     </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    </ThemeProvider>
    
  );
}

