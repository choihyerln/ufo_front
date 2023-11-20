import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import TMI from "./TMI";
import Settings from "./Settings";
import MainScreen from "./MainScreen";
import Logout from "./Logout";

const Drawer = createDrawerNavigator();

export default function MainDrawer({ navigation }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MainScreen" component={MainScreen} opt/>
      <Drawer.Screen name="TMI" component={TMI}/>
      <Drawer.Screen name="Settings" component={Settings}/>
      <Drawer.Screen name="Logout" component={Logout}/>
    </Drawer.Navigator>
  );
}