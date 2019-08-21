import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from "react-native-ui-kitten";
import {MessageForm} from "../components/MessageForm";

export class MessengerScreen extends React.Component {
    static navigationOptions = {
        title: "Morse Code Messenger"
    };
    render() {
        const {navigation} = this.props;
        const bridge = navigation.getParam('bridge', 'NULL');
        const user = navigation.getParam('user', 'NULL');
        console.log(bridge, user);

        return (
            <Layout style={styles.container}>
                <MessageForm bridge={bridge} />
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flex: 1,
        alignItems: 'center'
    },
    text: {
        marginVertical: 16,
    }
});