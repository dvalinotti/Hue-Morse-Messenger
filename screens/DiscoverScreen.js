import * as React from 'react';
import {StyleSheet, View, FlatList, ListView} from 'react-native';
import {Layout, Text, Button} from "react-native-ui-kitten";
import info from './info';
import {AppRegistry} from "react-native-web";

class RenderItem extends React.PureComponent {
    render() {
        return (
            <View key={result.key} style={styles.listItem}>
                <Text style={styles.itemName}>{result.item.name}</Text>
                <Text style={styles.itemIp}>{result.item.internalipaddress}</Text>
            </View>
        );
    }
}

export class DiscoverScreen extends React.Component{
    static navigationOptions = {
        title: "Discover Bridge"
    };
    render() {
        const {navigate} = this.props.navigation;
        const results = info;
        return (
            <Layout style={styles.container}>
                <Layout style={styles.bridgeList}>
                    <FlatList style={styles.list} data={results} renderItem={RenderItem} keyExtractor={(item, index) => `list-item-${index}`}/>
                </Layout>
                <Button style={styles.button} title={"Go"} onPress={() => navigate('Home', {})}>Go</Button>
            </Layout>

        );
    };
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flex: 1,
        alignItems: 'center'
    },
    button: {
        marginVertical: 10
    },
    text: {
        marginVertical: 16,
        width: 100,
    },
    itemName: {
        fontWeight: "600",
        textAlign: 'left',
        fontSize: 16
    },
    itemIp: {
        textAlign: 'left',
        fontWeight: "300",
        fontSize: 14
    },
    bridgeList: {
        flex: 1,
        maxHeight: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    list: {
        flex: 0,
        flexGrow: 1,
        width: 200,
        marginTop: 10,
        marginBottom: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 2,
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
    },
    listItem: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
    }
});

AppRegistry.registerComponent('RNProject', () => DiscoverScreen);
