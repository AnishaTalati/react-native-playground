import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import UsernameInput from "./src/components/atoms/text-inputs";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Group from "./src/components/atoms/group";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Username" component={UsernameInput}></Stack.Screen>
        <Stack.Screen name="Group" component={Group}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
