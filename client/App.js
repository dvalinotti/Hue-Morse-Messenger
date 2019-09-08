import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { StyleSheet, Text, View } from 'react-native';
import {ApplicationProvider} from "react-native-ui-kitten";
import {mapping, light as lightTheme, dark as darkTheme} from "@eva-design/eva";
import Navigator from "./Navigator";
import {client} from './Constants';

export default function App() {
  return (
    <ApolloProvider client={client} >
      <ApplicationProvider
        mapping={mapping}
        theme={lightTheme}>
            <Navigator />
      </ApplicationProvider>
    </ApolloProvider>
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
