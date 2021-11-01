import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchBar = ({onTermChange, term, onSearchComplete}) => {
    return (
        <View style={style.background}>
            <Feather name="search"
                     style={style.iconStyle}/>
            <TextInput style={style.inputStyle}
                       placeholder='Search'
                       onChangeText={onTermChange}
                       value={term}
                       autoCapitalize={"none"}
                       autoCorrect={false}
                       onEndEditing={onSearchComplete}
            />
        </View>
    );
};

const style = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: "#F0EEEE",
        borderRadius: 5,
        height: 50,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        borderColor: 'black',
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        alignSelf: 'center',
        marginHorizontal: 15,
        fontSize: 35
    }
});

export default SearchBar;
