import { StyleSheet, TextInput, TextInputProps, StyleProp, TextStyle } from 'react-native';
import React from 'react';

type Props = TextInputProps & {
    overrideTextInputStyles?: StyleProp<TextStyle>
}

const GlobalTextInput: React.FC<Props> = ({ value, onChangeText, overrideTextInputStyles }) => {
  return (
    <TextInput
      style={[styles.input, overrideTextInputStyles]}
      onChangeText={onChangeText}
      value={value}
      placeholder="Type here"
      placeholderTextColor={'#000'}
    />
  );
};

export default GlobalTextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    width: '100%',
    fontSize: 14,
    letterSpacing: 0.24,
  },
});
