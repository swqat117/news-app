import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { myTheme } from "./navigationColor";
import MyStack from "./NewsInfoNavigator";
import NewsSearchNavigation from "./NewsSearchNavigation";
import { View } from "react-native";
import React from "react";
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer theme={myTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: "#786767",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#262626",
        }}
      >

        <Tab.Screen
          options={{
            title: "News Feed",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome color={color} size={size} name="newspaper-o" />
            ),
          }}
          name="feed"
          component={MyStack}
        />
        <Tab.Screen
          options={{
            title: "Search News",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons color={color} size={30} name="magnify" />
            ),
          }}
          name="serach"
          component={NewsSearchNavigation}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
