import React from 'react';
import { Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router, { useRouter } from 'next/router';

import { Link } from 'expo-next-react-navigation'

export default function App() {
  const router = useRouter(); // Diff with Router?
  return (
      <NavigationContainer>
        <View>
          <Text>Welcome to Index (landing) Page</Text>
          <Button onPress={() => Router.reload()} title="Click me to refresh" />
          <Button onPress={() => Router.push('/app')} title="To App Page" />
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

