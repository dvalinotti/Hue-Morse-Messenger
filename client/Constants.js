import {gql} from "apollo-boost";
import ApolloClient from 'apollo-boost'; 

export const client = new ApolloClient({
    uri: 'http://192.168.1.5:8080',
  });

export const GQL_GROUPS = {
    query: gql`
    {
        groups {
            id
            name
            lights {
                id
                name
            }
        }
    }`
}

const prod = {
    username: "",
    ip: ""
};

const dev = {
    username: "DkaigS-y1yN4GQxH4yUa1CO9hTc0kwAzPAy8IVuY",
    ip: "192.168.1.3"
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;