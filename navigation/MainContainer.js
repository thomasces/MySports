import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useColorScheme} from 'react-native';

// Screens
import HomeScreen from './screens/HomeScreen';
import RankingsScreen from './screens/RankingsScreen';
import StandingsScreen from './screens/StandingsScreen';
import MatchesScreen from './screens/MatchesScreen';
import SelectionScreen from './screens/SelectionGroupScreen';
import GameDetailsScreen from './screens/GameDetailsScreen';

//Screen names
const homeName = 'Soccer';
const rankingsName = 'Rankings';
const standingsName = 'Standings';
const matchesName = 'Matches';
const selectionName = 'Selection';
const detailsName = 'Details';

const Tab = createBottomTabNavigator();

function MainContainer() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === homeName) {
              iconName = focused
                ? 'american-football'
                : 'american-football-outline';
            } else if (route.name === rankingsName) {
              iconName = focused ? 'trophy' : 'trophy-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Soccer" component={HomeScreen} />
        <Tab.Screen name="Rankings" component={RankingsScreen} />
        <Tab.Screen
          name={standingsName}
          component={StandingsScreen}
          options={{tabBarButton: () => null, tabBarVisible: false}}
        />
        <Tab.Screen
          name={matchesName}
          component={MatchesScreen}
          options={{tabBarButton: () => null, tabBarVisible: false}}
        />
        <Tab.Screen
          name={selectionName}
          component={SelectionScreen}
          options={{tabBarButton: () => null, tabBarVisible: false}}
        />
        <Tab.Screen
          name={detailsName}
          component={GameDetailsScreen}
          options={{tabBarButton: () => null, tabBarVisible: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
