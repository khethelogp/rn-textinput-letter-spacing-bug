import { StyleSheet, View } from 'react-native';
import React from 'react';
import GlobalTextInput from '../components/GlobalTextInput';

const Screen1 = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <GlobalTextInput 
        value={text}
        onChangeText={setText}
        overrideTextInputStyles={styles.input}
      />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    letterSpacing: 10 // 🐛 this is the bug, this leaks to other textinput components (totally different from GlobalTextInput)
  },
});
