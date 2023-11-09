import React from 'react'
import {createSwitchNavigator} from 'react-navigation'
import {Button, View,Text} from 'react-native'
class ScreenComponentOne extends React.Component {
    render() {
        return (
            <View>
                <Text>Helloooo</Text>
                <Text>Helloooo</Text>
                <Text>Helloooo</Text>
                <Text>Helloooo</Text>
                <Text>Helloooo</Text>
                <Button title='go to screen two' onPress={()=>{
                    this.props.navigation.navigate('RouteNameTwo')
                }}/>
            </View>
        );
    }
}
class ScreenComponentTwo extends React.Component {
    render() {
        return (
            <View>
                <Text>Helloooo</Text>
                <Text>Helloooo</Text>
                <Text>Helloooo</Text>
                <Text>Helloooo</Text>
                <Text>Helloooo</Text>
                <Button title='go to screen one' onPress={()=>{
                    this.props.navigation.navigate('RouteNameOne')
                }}/>
            </View>
        );
    }
}
const AppNavigator = createSwitchNavigator({
    "RouteNameOne": ScreenComponentOne,
    "RouteNameTwo": ScreenComponentTwo,
})

export default class App extends React.Component {
    render(){
        return <AppNavigator />
    }
}