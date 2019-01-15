import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as Screens from "./screens";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  First: Screens.FirstScreen,
  Second: Screens.SecondScreen
});

const AppContainer = createAppContainer(AppNavigator);
