import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import io from 'socket.io-client';
import Answers from './components/Answers';
import Compare from './components/Compare';
import Home from './components/Home';
import Host from './components/Host';
import Join from './components/Join';
import ScoreBoard from './components/ScoreBoard';
import Start from './components/Start';


const Stack = createStackNavigator();

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.connectSocket();
  }

  connectSocket() {
    this.socket = io("http://192.168.2.13:4000");
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode={false}>
          <Stack.Screen name="Home">
            {props => <Home {...props} io={io} socket={this.socket} connectSocket={this.connectSocket} />}
          </Stack.Screen>
          <Stack.Screen name="Host">
            {props => <Host {...props} io={io} socket={this.socket} />}
          </Stack.Screen>
          <Stack.Screen name="Start">
            {props => <Start {...props} io={io} socket={this.socket} />}
          </Stack.Screen>
          <Stack.Screen name="Answers">
            {props => <Answers {...props} io={io} socket={this.socket} />}
          </Stack.Screen>
          <Stack.Screen name="Compare">
            {props => <Compare {...props} io={io} socket={this.socket} />}
          </Stack.Screen>
          <Stack.Screen name="ScoreBoard">
            {props => <ScoreBoard {...props} io={io} socket={this.socket} />}
          </Stack.Screen>
          <Stack.Screen name="Join">
            {props => <Join {...props} io={io} socket={this.socket} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
