import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const ListItem = ({ result }) => {
  return (
    <View style={styleSheet.containerStyle}>
      <Image style={styleSheet.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styleSheet.itemStyle}>{result.name}</Text>
      <Text
        style={styleSheet.reviewStyle}
      >{`${result.rating} Stars, ${result.review_count} Reviews`}</Text>
      <Text style={styleSheet.reviewStyle}>
        ${result.rating} Stars , ${result.review_count} Reviews
      </Text>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    marginVertical: 4,
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  itemStyle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
  },
  reviewStyle: {
    fontSize: 12,
    color: "gray",
  },
});

export default ListItem;
