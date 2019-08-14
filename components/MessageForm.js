import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Input, Button} from "react-native-ui-kitten";
import {encodeMessage} from "../utils/MorseEncoder";

export function MessageForm() {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");

    function onChange(value) {
        setInput(value);
    }

    function onSubmit() {
        setOutput(encodeMessage(input));
    }

    return (
        <Layout style={styles.container}>
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