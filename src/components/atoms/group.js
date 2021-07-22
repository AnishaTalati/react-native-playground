import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
} from "react-native";

const Group = ({ navigation }) => {
  return (
    <SafeAreaView>
      {" "}
      <Button
        onPress={() => navigation.navigate("Group")}
        title="Choose Group"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => navigation.navigate("Group")}
        title="Create New Group"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};

export default Group;
