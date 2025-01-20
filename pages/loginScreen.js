import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Copy21 from "../icons/logo.png";
import coffeeRoastery from "../assets/coffeeRoastery.png";

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.overlap}>
            <Image style={styles.elementCopy} source={Copy21} />

            <Text style={styles.title}>DISHONCLICK</Text>

            <Image style={styles.coffeeRoastery} source={coffeeRoastery} />
          </View>

          <Text style={styles.description}>
            The best grain, the finest roast, the most powerful flavor.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignIn")}
          >
            <View style={styles.buttonBackground}>
              <Text style={styles.buttonText}>Sign in</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate("SignUp")}
          >
            <View style={styles.secondaryButtonBackground}>
              <Text style={styles.buttonText}>I’m new here</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  page: {
    flex: 1,
    backgroundColor: "#E3D5CA",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#E3D5CA",
    width: 411,
    height: 823,
    position: "relative",
  },
  overlap: {
    position: "absolute",
    top: 75,
    width: 411,
    height: 473,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
  },
  elementCopy: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    marginTop: 10,
  },
  coffeeRoastery: {
    width: 222,
    height: 23,
    resizeMode: "contain",
  },
  description: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#8b5e3c",
    fontFamily: "Montserrat-Medium",
    alignSelf: "center",
    marginTop: 600,
    width: "80%",
  },
  button: {
    position: "absolute",
    top: 752,
    left: 47,
    width: 320,
    height: 54,
  },
  buttonBackground: {
    backgroundColor: "#8b5e3c80",
    borderRadius: 30,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
  },
  secondaryButton: {
    position: "absolute",
    top: 683,
    left: 47,
    width: 320,
    height: 54,
  },
  secondaryButtonBackground: {
    backgroundColor: "#8b5e3c",
    borderRadius: 30,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
