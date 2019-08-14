import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ApplicationProvider} from "react-native-ui-kitten";
import {mapping, light as lightTheme, dark as darkTheme} from "@eva-design/eva";
import Navigator from "./Navigator";

export default function App() {
  return (
    <ApplicationProvider
      mapping={mapping}
      theme={lightTheme}>
      <Navigator />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
