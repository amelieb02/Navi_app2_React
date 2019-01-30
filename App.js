import React, {Component} from 'react';
import {  Alert, AppRegistry, Button, Dimensions, Image, Platform,
            ScrollView, StyleSheet,
            Text, TextInput, TouchableHighlight, TouchableOpacity,
            TouchableNativeFeedback, TouchableWithoutFeedback,
            View
        } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import MapView from 'react-native-maps';

var { height } = Dimensions.get('window');

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

export default class NaviApp extends React.Component {

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    _onLongPressButton() {
      Alert.alert('You long-pressed the button!')
    }

    constructor(props) {
      super(props);
      this.state = {text: ''};
    }
// Tabs definitions

    render() {
        let pic = {
              uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };


        return (
            <View style={styles.containerColumn}>

                <View style={[styles.header]}></View>

                <ScrollView>

                    <Image source={pic} style={{width: 193, height: 110}}/>

                    <MapView
                        style = {styles.map}
                        initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                    />

                    <Text style={styles.H1bigblue}>NaviApp!</Text>

                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButton}
                        title="Press Me"
                        color="#841584"
                    />
                    </View>
                    <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />

                    <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableOpacity</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.B1black}>This is regular text</Text>
                    <TextInput
                        style={styles.B1black}
                        placeholder="Type here the boat to track!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={{padding: 10, fontSize: 42}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>
                    <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />

                </ScrollView>

                <View style={[styles.footer]}></View>

            </View>

            <TabView


      />

        );
  }
};

const styles = StyleSheet.create({
    containerColumn: {
        flex: 1,
        flexDirection: 'column',
        padding: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        height: 50,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: '#03A9F4',
        zIndex: 10
    },
    footer: {
        height: 50,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#8BC34A'
    },
    H1bigblue: {
       color: 'blue',
       fontWeight: 'bold',
       fontSize: 30,
       textAlign: 'center',
     },
     B1black: {
        color: 'black',
        fontSize: 14,
      },

    buttonContainer: {
        margin: 20
    },
    button: {
      marginTop: 20,
      marginBottom: 20,
      width: 400,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    map: {
        left: 0,
        right: 0,
        top: 100,
        bottom: -100,
        position: 'absolute'
    },
    buttonText: {
      padding: 20,
      color: 'white'
  },
});
