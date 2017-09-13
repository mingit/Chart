import React from 'react';
import {
    AppRegistry,
        Text,
        View,
        Button,
        StyleSheet,
        Platform,
        ScrollView
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { VictoryBar, VictoryPie, VictoryGroup, VictoryStack } from "victory-native";

import ordersJson from './data/data.json';

const styles = StyleSheet.create({
container: {
alignItems: "center",
backgroundColor: "#e1d7cd",
justifyContent: "center",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 30
},
text: {
fontSize: 18,
fontFamily: (Platform.OS === "ios") ? "Menlo" : "monospace",
fontWeight: "bold",
marginTop: 25,
marginBottom: 20,
textAlign: 'center'
},
heading: {
fontSize: 27,
fontFamily: (Platform.OS === "ios") ? "Menlo" : "monospace",
fontWeight: "bold",
marginTop: 30,
marginBottom: 30
         }
});

class BarScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
scrollEnabled: true,
        };
    }

    static navigationOptions = {title: 'Bar'};
    render() {
        const { navigate } = this.props.navigation;
        var colors = ["red", "orange", "gold", "blue", "cyan", "green", "black", "purple", "brown", "navy", "orchid", "grey", "magenta", "wheat"];

        var label = 0;
        var grossAmoutForBar = ordersJson.orders.map(function(item) {
                if (label + 1 <= colors.length)
                {
                color  = colors[label];
                }
                else {
                color = colors[0];
                }

                label += 1;
                return {
x: label,
y: item.GrossAmount,
label: item.ProductId,
fill: color
};
});

label = 0;
var netAmountForBar = ordersJson.orders.map(function(item) {
        if (label + 1 <= colors.length)
        {
        color  = colors[label];
        }
        else {
        color = colors[0];
        }

        label += 1;
        return {
x: label,
y: item.NetAmount,
label: item.ProductId,
fill: color
};
});

label = 0;
var taxAmountForBar = ordersJson.orders.map(function(item) {
        if (label + 1 <= colors.length)
        {
        color  = colors[label];
        }
        else {
        color = colors[0];
        }

        label += 1;
        return {
x: label,
y: item.TaxAmount,
label: item.ProductId,
fill: color
};
});


label = 0;
var quantityForBar = ordersJson.orders.map(function(item) {
        if (label + 1 <= colors.length)
        {
        color  = colors[label];
        }
        else {
        color = colors[0];
        }

        label += 1;
        return {
x: label,
y: item.Quantity,
label: item.ProductId,
fill: color
};
});

label = 0;
var grossAmoutForStackBar = ordersJson.orders.map(function(item) {
        label += 1;
        return {
x: label,
y: item.GrossAmount
};
});

label = 0;
var netAmountForStackBar = ordersJson.orders.map(function(item) {
        label += 1;
        return {
x: label,
y: item.NetAmount
};
});

label = 0;
var taxAmountForStackBar = ordersJson.orders.map(function(item) {
        label += 1;
        return {
x: label,
y: item.TaxAmount
};
});

return (
        <ScrollView contentContainerStyle={styles.container} scrollEnabled={this.state.scrollEnabled}>

        <VictoryGroup
              width={300}
              height={375}
              offset={20}
              colorScale={"qualitative"}
            >
              <VictoryBar
                data={grossAmoutForBar}
              />
              <VictoryBar
                data={netAmountForBar}
              />
              <VictoryBar
                data={taxAmountForBar}
              />
        </VictoryGroup>

<Text style={styles.text}>{"VictoryStack"}</Text>
        <VictoryStack
                  width={700}
                  height={375}
                  colorScale={"qualitative"}
                >
        <VictoryBar
            data={grossAmoutForStackBar}
          />
          <VictoryBar
            data={netAmountForStackBar}
          />
          <VictoryBar
            data={taxAmountForStackBar}
          />
        </VictoryStack>


        <Text style={styles.text}>{"GrossAmount"}</Text>
        <VictoryBar
        style={{ data: { fill: "tomato", opacity: 0.5, width: 18 } }}
        data={grossAmoutForBar}
        />

        <Text style={styles.text}>{"NetAmount"}</Text>
        <VictoryBar
        style={{ data: { fill: "tomato", opacity: 0.5, width: 18 } }}
        data={netAmountForBar}
        />

        <Text style={styles.text}>{"TaxAmount"}</Text>
        <VictoryBar
        style={{ data: { fill: "tomato", opacity: 0.5, width: 18 } }}
        data={taxAmountForBar}
        />


<Text style={styles.text}>{"Quantity"}</Text>
<VictoryBar
style={{ data: { fill: "tomato", opacity: 0.5, width: 18 } }}
data={quantityForBar}
/>


</ScrollView>
);
}
}

class PieScreen extends React.Component {
    static navigationOptions = {title: 'Pie'};
    render() {
        var grossAmountForPie = ordersJson.orders.map(function(item) {
                return {
x: item.ProductId,
y: item.GrossAmount
};
});

return (
        <VictoryPie
        style={{
data: {
stroke: (data) => data.y > 75 ? "black" : "none",
opacity: (data) => data.y > 75 ? 1 : 0.4
}
}}
data={grossAmountForPie}
/>
);
}
}


const Chart = TabNavigator({
Bar: { screen: BarScreen },
Pie: { screen: PieScreen },
});

AppRegistry.registerComponent('Chart', () => Chart);
