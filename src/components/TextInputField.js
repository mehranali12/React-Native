import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../constants';
import { GolbalStyle } from "../utils/GlobalStyles";

export default TextInputField = ({placeholder, value, onChangeText, secureTextEntry}) => {
    return(
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.primary}
            style={styles.inputContainer}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        width: 300,
        height: 48,
        borderWidth: 1.5,
        marginVertical: 20,
        color: colors.primary,
        fontSize: 14,
        borderRadius: 10,
        paddingHorizontal: 10
    }
})