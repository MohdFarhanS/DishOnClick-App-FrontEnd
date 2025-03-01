import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Copy21 from "../icons/logo.png";
import coffeeRoastery from "../assets/coffeeRoastery.png";

const Page1 = () => {
  return (
    <View style={styles.page}>
      <View style={styles.overlapGroupWrapper}>
        <View style={styles.overlapGroup}>
          <Image style={styles.elementCopy} source={Copy21} />
          <Text style={styles.textWrapper}>DISHONCLICK</Text>
          <Image style={styles.coffeeRoastery} source={coffeeRoastery} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#E3D5CA",
    justifyContent: "center",
    alignItems: "center",
    height: "100%", 
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
    backgroundColor: "#E3D5CA", 
  },
  overlapGroupWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 60, 

    justifyContent: "center", 
    backgroundColor: "#E3D5CA", 
    flex: 1, 
  },
  overlapGroup: {
    position: "relative", 
    alignItems: "center", 
    backgroundColor: "#E3D5CA", 
    paddingTop: 20,
  },
  elementCopy: {
    width: 300,
    height: 300, 
    resizeMode: "contain", 
    marginBottom: 10, 
  },
  coffeeRoastery: {
    width: 200, 
    height: 50, 
    resizeMode: "contain",
    marginTop: 0, 
  },
  textWrapper: {
    fontSize: 25,
    fontWeight: "500",
    color: "#000",
    marginTop: 0, 
    backgroundColor: "#E3D5CA",
    paddingHorizontal: 0, 
    textAlign: "center", 
  },
});

export default Page1;
