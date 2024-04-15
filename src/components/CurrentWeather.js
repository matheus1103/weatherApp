import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () =>{
  const message = 'Hello World!'
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Feather name="sun" size={100} color="black" />
          <Text>{message}</Text>
          <Text>6</Text>
          <Text>Feels like 5</Text>
          <Text>Cloudy</Text>
          <Text>Wind: 10 km/h</Text>
          <View>
            <Text>High: 7</Text>
            <Text>Low: 5</Text>
          </View>
          <View>
            <Text>Its Sunny</Text>
            <Text></Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: 'lightblue',
    flex: 1,
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 24,
    color: 'gray',
  },
  hightLow: {
    fontSize: 20,
    color: 'black',
  },
  hightLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  descripiton: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  }
});

export default CurrentWeather;
