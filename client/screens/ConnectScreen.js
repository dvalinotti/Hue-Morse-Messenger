import * as React from 'react';
import {StyleSheet, View, FlatList, ListView} from 'react-native';
import {Layout, Text, Button} from "react-native-ui-kitten";
import {styles} from './DiscoverScreen';
import {AppRegistry} from "react-native-web";

import {discoverBridges, configureBridge} from '../utils/HueFunctions';

export class ConnectScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            connected: false,
            username: ''
        };
    }

    static navigationOptions = {
        title: "Link"
    };

    connect() {
        const {navigate} = this.props.navigation;
        discoverBridges().then((results) => {
            if (results !== null) {
                console.log(results);
                navigate('Home', {
                    user: results
                });
            } else {
                console.log("FAILED");
            }
        })
    }

    render() {

        return (
            <Layout style={styles.bridgeContainer}>
                <Text style={styles.text}>Press the link button, then press the button below to confirm.</Text>
                <Button style={styles.button} title={"Connect"} onPress={() => this.connect()}>Connect</Button>
            </Layout>
        );
    };
}

AppRegistry.registerComponent('ConnectScreen', () => ConnectScreen);
