import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Payment from './src/PaymentSection/Payment';
import PaymentSecond from './src/PaymentSection/PaymentSecond';
import NetBanking from './src/PaymentSection/NetBanking';
import UPI from './src/PaymentSection/UPI';
import CrDbCard from './src/PaymentSection/CrDbCard';
import PayOnService from './src/PaymentSection/PayOnService';
import ConfirmPayment from './src/PaymentSection/ConfirmPayment';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#5D5FEF'},
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
        }}
        initialRouteName="Payment">
        {/* <Stack.Screen name="PopUp" component={PopUp} /> */}
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="PaymentMethods" component={PaymentSecond} />
        <Stack.Screen name="NetBanking" component={NetBanking} />
        <Stack.Screen name="UPI" component={UPI} />
        <Stack.Screen name="CrDbCard" component={CrDbCard} />
        <Stack.Screen name="PayOnService" component={PayOnService} />
        <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
