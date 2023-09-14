import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import OrderPrepairingScreen from "./screens/OrderPrepairingScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen}/>
      <Stack.Screen name="Restaurant" options={{headerShown:false}}  component={RestaurantScreen}/>
      <Stack.Screen name="Cart" options={{presentation:'modal',headerShown:false}}   component={CartScreen}/>
      <Stack.Screen name="OrderPrepairing" options={{ presentation: 'fullScreenModal', headerShown: false }} component={OrderPrepairingScreen} />
      <Stack.Screen name="Delivery" options={{ presentation: 'fullScreenModal', headerShown: false }} component={DeliveryScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}