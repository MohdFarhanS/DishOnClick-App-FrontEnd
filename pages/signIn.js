import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Import gambar (pastikan path-nya sesuai)
import ArrowLeftIcon from "../icons/Arrow Left.png";
import CoffeeRoastery from "../assets/coffeeRoastery.png";
import Line2 from "../icons/Line2.png";
import MaskGroup from "../icons/maskGroup.png";

const SignIn = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.arrowLeft}
          onPress={() => navigation.goBack()}
        >
          <Image source={ArrowLeftIcon} style={styles.arrowLeftImage} />
        </TouchableOpacity>

        {/* Logo dan Judul */}
        <View style={styles.overlapGroup}>
          <Text style={styles.textWrapper4}>DISHONCLICK</Text>
          <Image source={MaskGroup} style={styles.maskGroup} />
        </View>

        {/* Judul Sign In */}
        <Text style={styles.textWrapper5}>Sign in</Text>
        <Text style={styles.subtitle}>Enter your mobile number to start</Text>

        <View style={styles.phoneInputContainer}>
          <View style={styles.phoneInputWrapper}>
            <Text style={styles.textWrapper}>+62</Text>
            <TextInput
              style={styles.textWrapper2}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Phone Number"
            />
          </View>
        </View>
        <Image source={Line2} style={styles.line} />

        <TouchableOpacity
          style={styles.buttonAddToCart}
          onPress={() => {
            if (phone !== "") {
              navigation.navigate("Verification");
            } else {
              alert("Please enter your phone number");
            }
          }}
        >
          <Text style={styles.textWrapper3}>Sign in</Text>
        </TouchableOpacity>

        <Image source={CoffeeRoastery} style={styles.coffeeRoastery} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#E7D0B6E3",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#E7D0B6E3",
    borderWidth: 1,
    borderColor: "#E3D5CA",
    height: "100%",
    width: "100%",
    position: "relative",
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowLeft: {
    position: "absolute",
    top: 45,
    left: 27,
  },
  arrowLeftImage: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  overlapGroup: {
    height: 153,
    position: "absolute",
    top: 62,
    width: 214,
    alignitems: "center",
    //   marginTop: 40
  },
  textWrapper4: {
    color: "#000000",
    fontFamily: "Archivo Black-Regular",
    color: "#5A4631",
    fontSize: 22,
    fontWeight: "400",
    //   left: 18,
    position: "absolute",
    textAlign: "center",
    alignSelf: "center",
    top: 129,
  },
  maskGroup: {
    height: 100,
    width: 100,
    left: 0,
    position: "absolute",
    top: 0,
    width: 214,
    marginBottom: 10,
    alignSelf: "center",
  },
  textWrapper5: {
    color: "#000000",
    fontFamily: "Poppins-Black",
    fontSize: 28,
    fontWeight: "700",
    color: "#5A4631",
    //   left: 155,
    position: "absolute",
    top: 262,
  },
  subtitle: {
    color: "#000000",
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    fontWeight: "500",
    position: "absolute",
    alignSelf: "center",
    top: 309,
    //   marginTop: 10
    padding: "",
  },
  textInput: {
    color: "$686868",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 15,
    fontWeight: "600",
    // padding: "0",
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    left: 140,
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    top: 358,
    //   paddingHorizontal: 5
    // paddingVertical:10
  },
  phoneInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  textWrapper: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    //   alignSelf: "center",
    right: 17,
    bottom: 5,
    //   marginRight: 15,
  },
  textWrapper2: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: "",
    flex: 1,
    right: 17,
    //   textAlign: "center",
    alignSelf: "center",
  },
  buttonAddToCart: {
    backgroundColor: "#8B5E3C",
    borderRadius: 30,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 400,
    //   left: 40,
    width: 360,
    //   padding: "auto",
  },
  textWrapper3: {
    color: "#ffffff",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    fontWeight: "600",
    //   padding: "auto"
  },
  line: {
    height: 1,
    width: 164,
    position: "absolute",
    top: 379,
    right: 10,
    left: 155,
  },
  coffeeRoastery: {
    height: 23,
    width: 223,
    position: "absolute",
    top: 219,
    //   left: 94,
  },
});

export default SignIn;
