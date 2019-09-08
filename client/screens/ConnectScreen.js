import * as React from 'react';
import {StyleSheet, View, FlatList, ListView} from 'react-native';
import {Layout, Text, Button, Modal} from "react-native-ui-kitten";
import {styles} from './DiscoverScreen';
import {AppRegistry} from "react-native-web";

import {discoverBridges, configureBridge} from '../utils/HueFunctions';

export class ConnectScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            connected: false,
            username: '',
            visible: false
        };
    }

    static navigationOptions = {
        title: "Link"
    };

    setVisible = (visible) => {
        this.setState({ visible: visible });
    };

    componentWillMount() {
        const {navigation} = this.props;
        // configureBridge(navigation.getParam('bridge', 'NULL'))
        //     .then((results) =>  results.json())
        //     .then(resultsJson => this.setState({
        //         username: resultsJson.success.username
        //     }))
        //     .catch((error) => console.log(error.stack));
    }

    connect() {
        const {navigation} = this.props,
            {navigate} = this.props.navigation;
        // configureBridge(navigation.getParam('bridge', 'NULL'))
        //     .then(resultsJson => {
        //         navigate('Home', {bridge: resultsJson})
        //     })
        //     .catch((error) => console.log(error.stack));
    }

    render() {

        return (
            <Layout style={styles.bridgeContainer}>
                <Text style={styles.text}>Press the link button, then press the button below to confirm.</Text>
                <Button style={styles.button} title={"Connect"} onPress={() => this.connect()}>Connect</Button>
                <Modal
                    visible={this.state.visible}
                    allowBackdrop={false}>
                    <View>
                        <Text>Hi! This is Modal Component!</Text>
                        <Button title='Close Modal' onPress={() => this.setVisible(false)}>Close</Button>
                    </View>
                </Modal>
            </Layout>
        );
    };
}

AppRegistry.registerComponent('ConnectScreen', () => ConnectScreen);
