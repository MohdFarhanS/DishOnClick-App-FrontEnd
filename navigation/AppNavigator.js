import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../pages/homeScreen";
import OrderScreen from "../pages/orderScreen";
import VoucherScreen from "../pages/voucherScreen";
import SettingScreen from "../pages/settingScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Tambahkan ini

const OrderStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrderMain" component={OrderScreen} />
      {/* <Stack.Screen name="Favorite" component={FavoriteScreen} /> */}
      {/* Tambahkan screen lain yang terkait dengan Order di sini */}
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Voucher") {
            iconName = focused ? "pricetag" : "pricetag-outline";
          } else if (route.name === "Order") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Setting") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#8B4513",
        tabBarInactiveTintColor: "#808080",
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#f0f0f0",
          borderTopLeftRadius: 20, // Menambahkan border radius
          borderTopRightRadius: 20,
          position: "absolute", // Memastikan navbar tetap di bawah
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 8, // Menambahkan shadow untuk Android
          shadowColor: "#000", // Shadow untuk iOS
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginTop: 5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Voucher"
        component={VoucherScreen}
        options={{ tabBarLabel: "Voucher",
          tabBarStyle: {
            display: 'none'
          } }}
      />
      <Tab.Screen
        name="Order"
        component={OrderStack}
        options={{ 
          tabBarLabel: "Order",
        tabBarStyle: {
          display: 'none'
        }
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{ tabBarLabel:"Setting",
          tabBarStyle: {
            display: 'none'
          } }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
