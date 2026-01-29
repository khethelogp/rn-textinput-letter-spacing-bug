import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

const Screen2 = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter text here"
        placeholderTextColor={'#888'}
      />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: '100%',
    fontSize: 14,
    paddingHorizontal: 10,
  },
});
