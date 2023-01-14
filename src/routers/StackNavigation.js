import React, {Fragment, useRef, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListUser from '../screens/ListUser';
import * as ScreenName from './ScreenNames';

const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
      }}
      headerMode={'none'}
      initialRouteName={ScreenName.LIST_USER}>
      <Stack.Screen name={ScreenName.LIST_USER} component={ListUser} />
    </Stack.Navigator>
  );
}

export default function App(props) {
  return (
    <Fragment>
      <NavigationContainer independent={true}>
        <MyStack />
      </NavigationContainer>
    </Fragment>
  );
}
