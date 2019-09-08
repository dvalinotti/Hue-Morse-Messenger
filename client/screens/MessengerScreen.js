import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from "react-native-ui-kitten";
import {MessageForm} from "../components/MessageForm";
import {GQL_GROUPS} from '../Constants';
import {gql} from 'apollo-boost';
import {useQuery} from "@apollo/react-hooks";

export class MessengerScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: "Morse Code Messenger"
    };
    render() {
        const {navigation} = this.props;
        const bridge = navigation.getParam('bridge', 'NULL');

        if (this.loading) {
            return <Layout> <Text>Loading...</Text> </Layout>
        } if (this.error) {
            return <Layout> <Text>Error: (</Text> </Layout>
        }
        return (
            <Layout style={styles.container}>
                <MessageForm bridge={bridge} />
                {/* {data.groups.map(({name}) => (
                        <Layout>
                            <Text>{name}</Text>
                        </Layout>
                    ))} */}
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