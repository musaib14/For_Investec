import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SwipeButton from 'rn-swipe-button';

const Screen2View = (props) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 2}} />
      <View style={styles.btnContainer}>
        <View style={styles.title}>
          <Text style={styles.titleTxt}>4 Variations of button</Text>
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity style={[styles.btn]}>
            <Text>Press Me</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity style={[styles.btn]}>
            <Text>Press Me</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity style={[styles.btn]}>
            <Text>Press Me</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', padding: 10}}>
          <SwipeButton
            height={50}
            title={'Slide me to continue'}
            shouldResetAfterSuccess={true}
            resetAfterSuccessAnimDelay={500}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#464a4f',
    padding: 5,
  },
  btnContainer: {
    flex: 3,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTxt: {
    color: '#dbd648',
    fontSize: 20,
  },
  btn: {
    width: '80%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBox: {
    width: '100%',
    padding: 10,
  },
});

export default Screen2View;
