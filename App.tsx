import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import SavedStudentScreen from './screens/SavedStudentScreen';

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Contact: undefined;
  Profile: undefined;

  Registration: {
    editMode?: boolean;
    studentData?: any;
  } | undefined;

  SavedStudent: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#070707',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome to the Student Portal' }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
        />

        <Stack.Screen
          name="Contact"
          component={ContactScreen}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />

        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ title: 'Student Registration' }}
        />

        <Stack.Screen
          name="SavedStudent"
          component={SavedStudentScreen}
          options={{ title: 'Saved Student Information' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}