import React, { Component } from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import Weather from './Weather';

const API_KEY = "611466b139b21ca65daae5b0aa7ff68d";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name : null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
          this._getWeather(position.coords.latitude, position.coords.longitude)
        },
    error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = (lat, long) => 
  {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
  )
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded : true
      });
    });
    console.log(lat,long);
  };

  render() {
    const { isLoaded , error ,temperature , name} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        {isLoaded ? (
        <Weather weatherName = {name} temp = {Math.floor(temperature - 273)}/> 
      ) : ( 
        <View style={styles.loading}>
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
