import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Screen1View = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={props.state.username}
          onChangeText={(value) => props.handleTextChange('username', value)}
          placeholder="Enter your name"
          style={styles.inputBox}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#464a4f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 5,
    padding: 10,
    fontSize: 25,
  },
});

export default Screen1View;
