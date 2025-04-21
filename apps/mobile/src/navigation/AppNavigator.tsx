import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { HeroScreen } from '../screens/HeroScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

// Workaround for TypeScript issues with React Navigation
const NavigationContainerComponent = NavigationContainer as any;
const StackNavigatorComponent = Stack.Navigator as any;
const StackScreenComponent = Stack.Screen as any;

export const AppNavigator = () => {
  return (
    <NavigationContainerComponent>
      <StackNavigatorComponent 
        initialRouteName="Hero"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#fff' }
        }}
      >
        <StackScreenComponent 
          name="Hero" 
          component={HeroScreen}
          options={{ headerShown: false }}
        />
        <StackScreenComponent 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'AtVest Home' }}
        />
        <StackScreenComponent 
          name="Details" 
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </StackNavigatorComponent>
    </NavigationContainerComponent>
  );
}; 