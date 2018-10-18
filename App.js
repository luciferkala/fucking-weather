import React, { Component } from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import Weather from './Weather';


export default class App extends Component {
  state = {
    isLoaded: false,
    error: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          isLoaded : true
        });
    },
    error => {
        this.setState({
          error: error
        })
      }
    );
  }
  render() {
    const { isLoaded , error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        {isLoaded ? 
        <Weather/> :
       ( <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex : 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 50
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40

  }
});
