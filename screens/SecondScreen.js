import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

export class SecondScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Second Screen</Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default SecondScreen;
