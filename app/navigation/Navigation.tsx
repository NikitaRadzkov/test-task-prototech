import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import RealTimeQuotes from '../screens/RealTimeQuotes';
import TradingInstrumentsWidget from '../screens/TradingInstrumentsWidget';
import colors from '../config/colors';

const RealQuotes = createStackNavigator();
const DashboardQuotes = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'ios' ? colors.white : colors.black,
  },
  headerTintColor: Platform.OS === 'ios' ? colors.black : colors.white,
};

const stackOptions = {
  RTQ: {
    headerTitle: 'Real Time Quotes',
    ...defaultNavigationOptions,
  },
  DB: {
    headerTitle: 'Insta Forex Quotes',
    ...defaultNavigationOptions,
  },
};

const RealTimeQuotesScreen = () => {
  return (
    <RealQuotes.Navigator>
      <RealQuotes.Screen name="RealTimeQuotes" component={RealTimeQuotes} options={stackOptions.RTQ} />
    </RealQuotes.Navigator>
  );
};

const DashboardQuotesScreen = () => {
  return (
    <DashboardQuotes.Navigator>
      <DashboardQuotes.Screen name="DashboardQuotes" component={TradingInstrumentsWidget} options={stackOptions.DB} />
    </DashboardQuotes.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size = 30 }) => {
            if (route.name === 'Quotes') {
              return (
                <MaterialCommunityIcons name={focused ? 'trending-up' : 'trending-up'} size={size} color={color} />
              );
            } else if (route.name === 'Dashboard') {
              return (
                <MaterialCommunityIcons
                  name={focused ? 'view-dashboard' : 'view-dashboard-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          activeTintColor: Platform.OS === 'ios' ? colors.secondary : 'white',
          inactiveTintColor: colors.secondary,
          labelStyle: {
            fontSize: 15,
          },
          style: {
            backgroundColor: Platform.OS === 'ios' ? 'white' : colors.black,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowRadius: 6,
            shadowOpacity: 1,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Quotes" component={RealTimeQuotesScreen} />
        <Tab.Screen name="Dashboard" component={DashboardQuotesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
