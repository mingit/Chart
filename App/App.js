import React from 'react';
import {
    AppRegistry,
        Text,
        View,
        Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { VictoryBar, VictoryPie } from "victory-native";

class BarScreen extends React.Component {
    static navigationOptions = {title: 'Bar'};
    render() {
        const { navigate } = this.props.navigation;
        return (
                <View>
                <VictoryBar
                style={{ data: { fill: "tomato", opacity: 0.5 } }}
                data={[
                { x: 15, y: 20, label: 1, fill: "red" },
                { x: 25, y: 30, label: 2, fill: "orange" },
                { x: 35, y: 65, label: 3, fill: "gold" },
                { x: 40, y: 50, label: 4, fill: "blue" },
                { x: 45, y: 40, label: 5, fill: "cyan" },
                { x: 50, y: 30, label: 6, fill: "green" }
                ]}  
                />  
                <Button
                onPress={() => navigate('Pie')}
                title="Show a pie graph"
                />
                </View>
               );
    }
}

class PieScreen extends React.Component {
    static navigationOptions = {title: 'Pie'};
    render() {
        return (
                <VictoryPie
                style={{
data: {
stroke: (data) => data.y > 75 ? "black" : "none",
opacity: (data) => data.y > 75 ? 1 : 0.4
}
}}
data={[
{x: "Cat", y: 62},
{x: "Dog", y: 91},
{x: "Fish", y: 55},
{x: "Bird", y: 55}
]}
/>
);
        }
}


const Chart = StackNavigator({
Bar: { screen: BarScreen },
Pie: { screen: PieScreen },
});


AppRegistry.registerComponent('Chart', () => Chart);
