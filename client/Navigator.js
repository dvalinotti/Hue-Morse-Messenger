import {createStackNavigator, createAppContainer} from 'react-navigation';
import {MessengerScreen} from "./screens/MessengerScreen";
import {DiscoverScreen} from "./screens/DiscoverScreen";
import { ConnectScreen } from './screens/ConnectScreen';

const MainNavigator = createStackNavigator({
    Discover: {screen: DiscoverScreen},
    Home: {screen: MessengerScreen},
    Link: {screen: ConnectScreen}
});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;
