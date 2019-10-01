import React from 'react';
import {Button} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Camera test',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Open camera"
        onPress={() => navigate('Camera', {name: 'Camera'})}
      />
    );
  }
}
