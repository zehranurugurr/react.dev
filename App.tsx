import 'react-native-reanimated';
import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // GEREKLİ EKLEME
import { Toaster } from 'sonner-native';

import TransitionImage from './components/TransitionImage';
import HomeScreen from './screens/HomeScreen';
import RoadmapScreen from './screens/RoadmapScreen';
import LoginScreen from './screens/LoginScreen';
import Section1Screen from './screens/Section1Screen';
import Section2Screen from './screens/Section2Screen';
import Section3Screen from './screens/Section3Screen';
import Section4Screen from './screens/Section4Screen';

const Stack = createNativeStackNavigator();

function RootStack() {
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  return (
    <>
      <TransitionImage visible={isTransitioning} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="Roadmap" component={RoadmapScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="Section1" component={Section1Screen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="Section2" component={Section2Screen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="Section3" component={Section3Screen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="Section4" component={Section4Screen} options={{ animation: 'slide_from_right' }} />
      </Stack.Navigator>
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* GESTURE HANDLER ROOT EKLENDİ */}
      <SafeAreaProvider>
        <Toaster />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    userSelect: 'none',
  },
});
