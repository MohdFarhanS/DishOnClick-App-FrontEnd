import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { saveUserData } from "../src/data/userStorage";

import ArrowLeftIcon from "../icons/Arrow-Left.png";

const SignUp = () => {
  const navigation = useNavigation();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleSignUp = async () => {
    const userData = { 
      phone, 
      email, 
      username, 
      gender: selectedGender 
    };

    const saved = await saveUserData(userData);
    if (saved) {
      console.log('Data tersimpan:', userData);
      navigation.navigate('SignIn');
    } else {
      alert('Gagal menyimpan data pengguna');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.page}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.page}>
        <View style={styles.container}>
          {/* Back Button */}
          <TouchableOpacity
            style={styles.arrowLeft}
            onPress={() => navigation.goBack()} // Kembali ke halaman sebelumnya
          >
            <Image source={ArrowLeftIcon} style={styles.arrowLeftImage} />
          </TouchableOpacity>

          {/* Sign Up Header */}
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.subtitle}>Fill your data to start order</Text>

          {/* Form Fields */}
          <View style={styles.inputField}>
            <Text style={styles.inputLabel}>No Hp</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone} // Menyimpan nilai input ke state
              placeholder="Masukkan No Hp"
            />
          </View>

          <View style={styles.inputField}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail} // Menyimpan nilai input ke state
              placeholder="Masukkan Email"
            />
          </View>

          <View style={styles.inputField}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              value={username}
              onChangeText={setUsername} // Menyimpan nilai input ke state
              placeholder="Masukkan Username"
            />
          </View>

          {/* Gender Selection */}
          <View style={styles.genderContainer}>
            {/* Opsi Male */}
            <TouchableOpacity
              style={styles.genderOption}
              onPress={() => handleGenderSelect("male")} // Panggil fungsi saat opsi dipilih
            >
              <View
                style={[
                  styles.genderCircle,
                  selectedGender === "male" && styles.selectedGenderCircle, // Tambahkan styling jika dipilih
                ]}
              />
              <Text style={styles.genderLabel}>Male</Text>
            </TouchableOpacity>

            {/* Opsi Female */}
            <TouchableOpacity
              style={styles.genderOption}
              onPress={() => handleGenderSelect("female")} // Panggil fungsi saat opsi dipilih
            >
              <View
                style={[
                  styles.genderCircle,
                  selectedGender === "female" && styles.selectedGenderCircle, // Tambahkan styling jika dipilih
                ]}
              />
              <Text style={styles.genderLabel}>Female</Text>
            </TouchableOpacity>
          </View>

          {/* Terms and Conditions */}
          <Text style={styles.termsText}>
            <Text>I agree with </Text>
            <Text style={styles.linkText}>Privacy Policy</Text>
            <Text> and </Text>
            <Text style={styles.linkText}>Terms & Conditions</Text>
          </Text>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#E6D0B5",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container: {
    width: 411,
    height: 823,
    backgroundColor: "#E6D0B5",
    borderWidth: 1,
    borderColor: "#E3D5CA",
    padding: 20,
    position: "relative",
    marginBottom: 20,
    backgroundColor: "#E6D0B5",
  },
  arrowLeft: {
    position: "absolute",
    top: 35,
    left: 27,
  },
  arrowLeftImage: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  title: {
    fontSize: 35,
    fontWeight: "900",
    textAlign: "center",
    color: "#000",
    marginTop: 40,
    fontFamily: "Poppins-Black",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    color: "#000",
    marginVertical: 10,
    fontFamily: "Poppins-Regular",
  },
  form: {
    flex: 1, // Membuat form mengisi ruang yang tersisa
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: "#D9D9D9",
    height: 70,
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginBottom: 5,
  },
  textInput: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 0,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  genderOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  genderCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    backgroundColor: "#D9D9D9",
    marginRight: 10,
  },
  selectedGenderCircle: {
    backgroundColor: "#8B5E3C",
    borderColor: "#8B5E3C",
  },
  genderLabel: {
    fontSize: 13,
    fontWeight: "500",
    color: "#000",
  },
  termsText: {
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 15,
    fontFamily: "Montserrat-SemiBold",
  },
  linkText: {
    color: "#B61D1D",
  },
  signUpButton: {
    backgroundColor: "#8B5E3C",
    borderRadius: 30,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signUpButtonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
  },
});

export default SignUp;
