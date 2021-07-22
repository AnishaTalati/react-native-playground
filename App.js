import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import UsernameInput from "./src/components/atoms/text-inputs";

export default function App() {
  return (
    <View>
      <UsernameInput />
    </View>
  );
}
