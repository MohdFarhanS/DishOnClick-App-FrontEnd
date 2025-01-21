import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getUserData } from "../src/data/userStorage";

import ArrowLeftIcon from "../icons/Arrow Left.png";

export const Verification = () => {
  const [userPhone, setUserPhone] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const loadUserPhone = async () => {
      const userData = await getUserData();
      if (userData && userData.phone) {
        setUserPhone('+62' + userData.phone);
      }
    };
    
    loadUserPhone();
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.div}>
        <TouchableOpacity
          style={styles.arrowLeft}
          onPress={() => navigation.goBack()}
        >
          <Image source={ArrowLeftIcon} style={styles.arrowLeftImage} />
        </TouchableOpacity>
        <Text style={styles.textWrapper}>{userPhone}</Text>

        <Text style={styles.textWrapper2}>Enter OTP Code</Text>

        <Text style={styles.textWrapper3}>Verification Code</Text>

        <TouchableOpacity
          style={styles.buttonAddToCart}
          onPress={() => navigation.navigate("AppNavigator")}
        >
          <View style={styles.group}>
            <Text style={styles.textWrapper4}>Verify</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.overlapGroup}>
          <Text style={styles.textWrapper5}>Input Verification Code</Text>

          <Text style={styles.p}>Verification code sent to Whatsapp</Text>
        </View>

        <Image source={require("../icons/Line2.png")} style={styles.line} />

        <Text style={styles.textWrapper6}>Didn’t receive code?</Text>

        <Text style={styles.textWrapper7}>50</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#e3d5ca",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  div: {
    backgroundColor: "#e3d5ca",
    borderWidth: 1,
    borderColor: "#e3d5ca",
    height: 823,
    position: "relative",
    width: 411,
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    color: "#000000",
    fontFamily: "ADLaM Display-Regular",
    fontSize: 12,
    fontWeight: "400",
    // left: 151,
    position: "absolute",
    top: 175,
    marginHorizontal: "auto",
    textAlign: "center",
  },
  textWrapper2: {
    color: "#000000",
    fontFamily: "ADLaM Display-Regular",
    fontSize: 16,
    fontWeight: "400",
    left: 65,
    position: "absolute",
    top: 30,
  },
  textWrapper3: {
    color: "#939090",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 17,
    fontWeight: "600",
    height: 21,
    position: "absolute",
    top: 220,
    textAlign: "center",
  },
  buttonAddToCart: {
    backgroundColor: "#8b5e3c",
    borderRadius: 30,
    height: 38,
    left: 25,
    position: "absolute",
    top: 291,
    width: 360,
  },
  group: {
    height: 24,
    left: 145,
    position: "relative",
    top: 7,
    width: 72,
  },
  textWrapper4: {
    color: "#ffffff",
    fontFamily: "Montserrat-ExtraBold",
    fontSize: 20,
    fontWeight: "800",
    left: 0,
    position: "absolute",
    top: 0,
    width: 70,
    textAlign: 'center'
  },
  overlapGroup: {
    height: 60,
    left: 31,
    position: "absolute",
    top: 115,
    width: 340,
  },
  textWrapper5: {
    color: "#8b5e3c",
    fontFamily: "Poppins-Black",
    fontSize: 28,
    fontWeight: "900",
    left: 25,
    position: "absolute",
    textAlign: "center",
    top: 0,
    marginHorizontal: "center",
  },
  p: {
    color: "#000000",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    fontWeight: "400",
    left: 0,
    right: 0,
    position: "absolute",
    textAlign: "center",
    top: 39,
    marginHorizontal: "auto",
  },
  line: {
    height: 1,
    position: "absolute",
    top: 245,
    width: 164,
  },
  textWrapper6: {
    color: "#000000",
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    fontWeight: "400",
    position: "absolute",
    top: 357,
    alignItems: "center",
  },
  textWrapper7: {
    color: "#b61d1d",
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    fontWeight: "500",
    alignItems: "center",
    position: "absolute",
    top: 390,
  },
  arrowLeft: {
    position: "absolute",
    top: 30,
    left: 29,
  },
  arrowLeftImage: {
    width: 24,
    height: 24,
  },
});

export default Verification;
