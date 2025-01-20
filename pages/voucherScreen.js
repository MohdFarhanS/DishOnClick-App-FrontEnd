import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Voucher = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Voucher</Text>
      </View>

      <View style={styles.emptyStateContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.emptyStateTitle}>No Voucher</Text>
          <Text style={styles.emptyStateSubtitle}>
            You have no voucher yet.
          </Text>
          <Image
            source={require("../assets/blurBg.png")}
            style={styles.emptyStateImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
    elevation: 2,
    height: 100,
  },
  backButton: {
    padding: 8,
    top: 10,
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    color: "#000000",
    top: 10,
  },
  emptyStateContainer: {
    flex: 1,
    backgroundColor: "#cecdcd",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  emptyStateImage: {
    width: 300,
    height: 200,
    bottom: 130,
    left: 23,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
    color: "#000000",
    alignItems: "center",
    bottom: 150,
    fontWeight: "bold",
  },
  emptyStateSubtitle: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    color: "#757575",
    textAlign: "center",
    marginBottom: 16,
    alignItems: "center",
    bottom: 140,
  },
});

export default Voucher;
