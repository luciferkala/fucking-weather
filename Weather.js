import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain:{
        colors:["#00C6FB","#005BEA"],
        title: "Raining like MF",
        subtitle: "For more info look outside" ,
        icons: "weather-rainy"
    },
    Clear:{
        colors:["#FEF253","#FF7300"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt" ,
        icons: "weather-sunny"
    },
    Thunderstorm:{
        colors:["#00ECBC","#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Acually, outside of the house" ,
        icons: "weather-lightening"
    },
    Clouds:{
        colors:["#D7D2CC","#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring" ,
        icons: "weather-cloudy"
    },
    Snow:{
        colors:["#7DE2FC","#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no" ,
        icons: "weather-snowy"
    },
    Drizzle:{
        colors:["#89F7FE","#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay" ,
        icons: "weather-hail"
    },
    Haze:{
        colors:["#D7D2CC","#304352"],
        title: "Haze",
        subtitle: "I don't see fucking landscape" ,
        icons: "weather-windy"
    },
    Fog:{
        colors:["#D7D2CC","#304352"],
        title: "Fog",
        subtitle: "It's like you have no glasses on" ,
        icons: "weather-fog"
    },
    Mist:{
        colors:["#D7D2CC","#304352"],
        title: "Fog",
        subtitle: "It's like you have no glasses on" ,
        icons: "weather-fog"
    }
};

function Weather( { weatherName, temp }) {
    console.log(weatherName);
    return(
        <LinearGradient 
            colors= {weatherCases[weatherName].colors} 
            style={styles.container}
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons 
                color="white" 
                size={144} 
                name={weatherCases[weatherName].icons}>
                </MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style = {styles.title}>{weatherCases[weatherName].title}</Text>
                 <Text style = {styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

export default Weather;

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    upper : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "transparent"
    },
    temp : {
        fontSize: 50,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    }, 
    lower : {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 50
    }


});