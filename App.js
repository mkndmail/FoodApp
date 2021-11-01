import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import DetailsScreen from "./src/screens/DetailScreen";
import SearchScreen from "./src/screens/SearchScreen";

const AppNavigator = createStackNavigator(
    {
        Search: SearchScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: "Search",
        defaultNavigationOptions: {
            title: "Business Search",
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}