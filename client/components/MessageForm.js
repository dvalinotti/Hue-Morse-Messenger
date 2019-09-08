import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {config} from '../Constants';
import {Layout, Text, Input, Button} from "react-native-ui-kitten";
import {encodeMessage} from "../utils/MorseEncoder";
import {discoverBridges} from "../utils/HueFunctions";
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export function MessageForm(props) {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");
    const [username, setUsername] = React.useState(config.username);
    const api = graphql`
        query fetchAllRooms {
          groups {
            lights {
            name
            id
            }
          }
        }
    `;

    const { loading, data, error } = useQuery(api);
     
    useEffect(() => {
        if (loading) {
            console.log('loading...');
        } if (error) {
            console.log(error);
        } if (data !== undefined) {
            console.log(data);
        }
    });

    // configureBridge(props.bridge).then((response) => {
    //     setUsername(response[0].username);
    // });

    function onChange(value) {
        setInput(value);
    }

    // useEffect(() => {
    //     getLights(username);
    // })

    function onSubmit() {
        // discoverBridges()
        //     .then((response) => console.log(response))
        //     .catch((error) => console.error(error));
        // setOutput(encodeMessage(input));
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