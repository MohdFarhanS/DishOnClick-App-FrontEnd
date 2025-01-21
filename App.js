import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import PageWithRedirect from "./component/pageWithRedirect";
import Verification from "./pages/verification";
import AppNavigator from "./navigation/AppNavigator";
import Notification from "./pages/notificationScreen";
import OrderHistory from "./pages/orderHistory";
import OrderSummary from "./pages/orderSummaryScreen";
import PaymentScreen from "./pages/paymentScreen";
import AboutScreen from "./pages/aboutScreen";
import LanguageScreen from "./pages/languageScreen";
import HelpScreen from "./pages/helpScreen";
import LoginScreen from "./pages/loginScreen";
import Favorite from "./pages/favoriteScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Page1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Page1" component={PageWithRedirect} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="OrderSummary" component={OrderSummary} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
