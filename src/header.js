import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerActions} from '@react-navigation/native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
          name="bars"
          size={30}
          color={'blue'}
        />
        <Text style={styles.text}>{this.props.username}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 25,
  },
});

export default connect(mapStateToProps)(Header);
