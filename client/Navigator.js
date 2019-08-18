import {createStackNavigator, createAppContainer} from 'react-navigation';
import {MessengerScreen} from "./screens/MessengerScreen";
import {DiscoverScreen} from "./screens/DiscoverScreen";

const MainNavigator = createStackNavigator({
    Discover: {screen: DiscoverScreen},
    Home: {screen: MessengerScreen}

});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;
