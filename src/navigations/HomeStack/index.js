import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Home from "../../containers/Home";

export const HomeStack = createStackNavigator(
  {
    Home_Screen: {
      screen: Home
    }
  }
);