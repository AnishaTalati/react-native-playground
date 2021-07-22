import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

const UsernameInput = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [username, setUsername] = React.useState("");

  console.log(username);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
        keyboardType="default"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Group")}
        title="Confirm Username"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    color: "#841584",
  },
});

export default UsernameInput;
