import React from "react";
import { Button, View, Text } from "react-native";
import AppConstants from "../../constants/AppConstants";

const HomeScreen = () => {
  return (
    <View>
      <Text>This is Home Screen</Text>
      <Button
        title="Go to Login Screen"
        onPress={() => this.props.navigation.navigateTo("Login")}
      />
    </View>
  );
};
export default HomeScreen;
