import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

export class FirstScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>First Screen</Text>
        <Button
          title="Second Screen"
          onPress={() => this.props.navigation.navigate("Second")}
        />
      </View>
    );
  }
}

export default FirstScreen;
