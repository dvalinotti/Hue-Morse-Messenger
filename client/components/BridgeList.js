import { discover, discoverBridges } from "../utils/HueFunctions";
import { render } from "react-native-web";
import { Layout } from "react-native-ui-kitten";

export default function BridgeList() {
    const [bridges, setBridges] = useState([]);

    discoverBridges().then((response) => {
        setBridges(response);
    });

    render(
        <View>
            {bridges.map((bridge, key) => (
                <Layout>

                </Layout>
            ))}
        </View>
    )
}