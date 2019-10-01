import React from 'react';
import {Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './app/home';
import CameraScreen from './app/app-camera';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome to Jane's fucking profile",
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's Home"
        onPress={() => navigate('Home', {name: 'Jane'})}
      />
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Camera: {screen: CameraScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
