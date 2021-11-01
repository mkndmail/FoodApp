import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
yelp;
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = (price) =>
    results.filter((result) => {
      return result.price === price;
    });
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onSearchComplete={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={{ marginLeft: 15 }}>
        We have found {results.length} results
      </Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
  },
});

export default SearchScreen;
