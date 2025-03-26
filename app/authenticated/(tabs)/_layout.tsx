import { Platform } from 'react-native'
import { ShoppingBag } from 'react-native-feather'
import { Tabs } from 'expo-router'

export default function TabLayout () {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FC6C85',
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => null,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => null,
        }}
      />
    </Tabs>
  );
}