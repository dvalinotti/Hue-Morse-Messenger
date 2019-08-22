import * as React from 'react';
import {StyleSheet, View, FlatList, ListView} from 'react-native';
import {Layout, Text, Button} from "react-native-ui-kitten";
import {AppRegistry} from "react-native-web";
import {discoverBridges, configureBridge} from '../utils/HueFunctions';

class RenderItem extends React.Component {
    render() {
        return (
            <View key={result.key} style={styles.listItem}>
                <Text style={styles.itemName}>{result.item.name}</Text>
                <Text style={styles.itemIp}>{result.item.internalipaddress}</Text>
            </View>
        );
    }
}

export class DiscoverScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            bridgeList: [],
            user: {},
        };
    }

    componentWillMount() {
        discoverBridges().then((results) => {
            this.setState({
                bridgeList: results,
                loading: false
            });
        });
    }

    selectBridge = () => {
        const {navigate} = this.props.navigation;
        navigate('Link', {
            bridge: this.state.bridgeList[0]
        });
    }

    static navigationOptions = {
        title: "Discover Bridge"
    };
    
    render() {
        const {navigate} = this.props.navigation;

        return (
            <Layout style={styles.bridgeContainer}>
                {!this.state.loading && (
                    <>
                        <Layout style={styles.bridgeList}>
                            <Text style={styles.bridgeIp}>{this.state.bridgeList[0].id}</Text>
                            <Text style={styles.bridgeId}>{this.state.bridgeList[0].internalipaddress}</Text>
                        </Layout>
                        <Button style={styles.button} title={"Go"} onPress={() => this.selectBridge()}>Connect</Button>
                    </>
                )}
            </Layout>

        );
    };
}

export const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flex: 1,
        alignItems: 'center'
    },
    bridgeContainer: {
        flex: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        height: 200,
        marginHorizontal: 30
    },
    button: {
        marginVertical: 10
    },
    text: {
        marginVertical: 16,
        width: 200,
    },
    bridgeIp: {
        textAlign: 'left',
        width: 200,
        fontWeight: 'bold',
    },  
    bridgeId: {
        textAlign: 'left',
        width: 200,
        color: 'lightgray'
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
        alignItems: "flex-start",
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
