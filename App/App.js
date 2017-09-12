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
import { StackNavigator } from 'react-navigation';
import { VictoryBar, VictoryPie } from "victory-native";

import ordersJson from './data/data.json';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#e1d7cd",
    justifyContent: "center",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50
  },
  text: {
    fontSize: 18,
    fontFamily: (Platform.OS === "ios") ? "Menlo" : "monospace",
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 20
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

        var x = 5;
        var label = 0;
        var grossAmoutForBar = ordersJson.orders.map(function(item) {
            x += 5;
            if (label + 1 <= colors.length)
            {
              color  = colors[label];
            }
            else {
              color = colors[0];
            }

            label += 1;
            return {
              x: x,
              y: item.GrossAmount,
              label: item.ProductId,
              fill: color
            };
          });

        x = 5;
        label = 0;
        var netAmountForBar = ordersJson.orders.map(function(item) {
            x += 5;
            if (label + 1 <= colors.length)
            {
              color  = colors[label];
            }
            else {
              color = colors[0];
            }

            label += 1;
            return {
              x: x,
              y: item.NetAmount,
              label: item.ProductId,
              fill: color
            };
          });

          x = 5;
          label = 0;
          var taxAmountForBar = ordersJson.orders.map(function(item) {
              x += 5;
              if (label + 1 <= colors.length)
              {
                color  = colors[label];
              }
              else {
                color = colors[0];
              }

              label += 1;
              return {
                x: x,
                y: item.TaxAmount,
                label: item.ProductId,
                fill: color
              };
            });


                      x = 5;
                      label = 0;
                      var quantityForBar = ordersJson.orders.map(function(item) {
                          x += 5;
                          if (label + 1 <= colors.length)
                          {
                            color  = colors[label];
                          }
                          else {
                            color = colors[0];
                          }

                          label += 1;
                          return {
                            x: x,
                            y: item.Quantity,
                            label: item.ProductId,
                            fill: color
                          };
                        });

        return (
              <ScrollView contentContainerStyle={styles.container} scrollEnabled={this.state.scrollEnabled}>

                <View>
                <Text style={styles.text}>{"GrossAmount of each product"}</Text>
                <VictoryBar
                style={{ data: { fill: "tomato", opacity: 0.5, width: 18 } }}
                data={grossAmoutForBar}
                />

                <Text style={styles.text}>{"NetAmount of each product"}</Text>
                <VictoryBar
                style={{ data: { fill: "tomato", opacity: 0.5, width: 18 } }}
                data={netAmountForBar}
                />

                <Text style={styles.text}>{"TaxAmount of each product"}</Text>
                <VictoryBar
                style={{ data: { fill: "tomato", opacity: 0.5, width: 18 } }}
                data={taxAmountForBar}
                />


                                <Text style={styles.text}>{"Quantity of each product"}</Text>
                                <VictoryBar
                                style={{ data: { fill: "tomato", opacity: 0.5, width: 18 } }}
                                data={quantityForBar}
                                />


                <Button
                onPress={() => navigate('Pie')}
                title="Show a pie graph"
                />
                </View>

                </ScrollView>
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
