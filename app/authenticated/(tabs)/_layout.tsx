import { Platform } from 'react-native'
import { Book, ShoppingBag, User, Users } from 'react-native-feather'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FC6C85',
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute'
          },
          default: {}
        })
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIconStyle: {
            width: 30,
            height: 30
          },
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <ShoppingBag
              color={color}
              strokeWidth={focused ? 2 : 1.75}
              height={focused ? 30 : 25}
              width={focused ? 30 : 25}
            />
          )
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          tabBarIconStyle: {
            width: 30,
            height: 30
          },
          title: 'Journal',
          tabBarIcon: ({ color, focused }) => (
            <Book
              color={color}
              strokeWidth={focused ? 2 : 1.75}
              height={focused ? 30 : 25}
              width={focused ? 30 : 25}
            />
          )
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          tabBarIconStyle: {
            width: 30,
            height: 30
          },
          title: 'Friends',
          tabBarIcon: ({ color, focused }) => (
            <Users
              color={color}
              strokeWidth={focused ? 2 : 1.75}
              height={focused ? 30 : 25}
              width={focused ? 30 : 25}
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIconStyle: {
            width: 30,
            height: 30
          },
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <User
              color={color}
              strokeWidth={focused ? 2 : 1.75}
              height={focused ? 30 : 25}
              width={focused ? 30 : 25}
            />
          )
        }}
      />
    </Tabs>
  )
}
