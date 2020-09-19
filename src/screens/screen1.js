import React, {Component} from 'react';
import {connect} from 'react-redux';
import Screen1View from '../views/screen1-view';

class Screen1 extends Component {
  state = {
    usename: '',
  };

  handleTextChange = (name, value) => {
    this.setState({[name]: value});
    this.props.updateUsername(value);
  };

  render() {
    return (
      <Screen1View
        handleTextChange={this.handleTextChange}
        state={this.state}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUsername: (username) => dispatch({type: 'SET_USERNAME', username}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Screen1);
