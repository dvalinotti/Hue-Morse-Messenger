import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Input, Button} from "react-native-ui-kitten";
import {encodeMessage} from "../utils/MorseEncoder";
import {discoverBridges, configureBridge} from "../utils/HueFunctions";

export function MessageForm(props) {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");
    console.log(props.bridge[0].success.username);
    const [username, setUsername] = React.useState(props.bridge[0].success.username);

    // configureBridge(props.bridge).then((response) => {
    //     setUsername(response[0].username);
    // });

    function onChange(value) {
        setInput(value);
    }

    function onSubmit() {
        // discoverBridges()
        //     .then((response) => console.log(response))
        //     .catch((error) => console.error(error));
        // setOutput(encodeMessage(input));
    }

    return (
        <Layout style={styles.container}>
            <Text style={styles.ipText}>
                Username: {username}
            </Text>
            <Text style={styles.formText}>
                Input
            </Text>
            <Layout style={styles.inputContainer}>
                <Input value={input} onChangeText={(value) => onChange(value)} style={styles.inputField}/>
            </Layout>
            <Button onPress={onSubmit}>Submit</Button>

            <Layout style={styles.inputContainer}>
                <Text style={styles.text}>{output}</Text>
            </Layout>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flex: 1,
        alignItems: 'center'
    },
    text: {
        marginVertical: 16,
    },
    formText: {
        textAlign: 'left',
        fontSize: 16,
        marginRight: 'auto'
    },
    ipText: {
        fontSize: 14,
        paddingBottom: 30,
        color: 'lightgray'
    },
    inputContainer: {
        flexDirection: 'row',
        width: 200,
        paddingBottom: 15
    },
    inputField: {
        width: '100%',
        paddingTop: 15
    }
});