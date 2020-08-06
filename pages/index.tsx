import React from 'react';
import { Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Link } from 'expo-next-react-navigation'

export default function App() {
  const me: number = 1;
  return (
      <NavigationContainer>
        <View>
          <Text>Welcome to Index (landing) Page</Text>
          <Button onPress={() => console.table(['one', 'two'])} title="Click me" />
          <Link routeName="app" params={{ initialRouteName: 'Other', key: 'blah'}} web={{ as: '.'}}>
            <Button
            style={{ userSelect:'none' }}
            onPress={() => {console.log("pressed")}}
            title="Go to App"></Button>
          </Link>
        </View>
      </NavigationContainer>
  )
}

