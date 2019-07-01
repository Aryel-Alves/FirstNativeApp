import React, { Component } from 'react';
import { View, Text } from "react-native";

export default class Main extends Component{
    static navigationOptions = {
        title: 'AppNinja'
    }
    render(){ 
        return(
            <View>
                <Text>MAIN CARAI</Text>
            </View>
        );
    }
}