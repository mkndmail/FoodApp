import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ListItem from "../components/ListItem";

const ResultsList = ({ title, results, time }) => {
  return (
    <View style={styleSheet.conainerStyle}>
      <Text style={styleSheet.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem result={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    marginLeft: 15,
    marginBottom: 5,
  },
  conainerStyle: {
    marginBottom: 10,
  },
});

export default ResultsList;
