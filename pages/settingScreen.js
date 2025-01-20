import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const SettingScreen = () => {
  const navigation = useNavigation();
  const [isPushEnabled, setIsPushEnabled] = React.useState(false);

  const toggleSwitch = () =>
    setIsPushEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="black" />
          <Text style={styles.headerTitle}>Setting</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifikasi</Text>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.leftContent}>
            <Icon name="notifications-outline" size={24} color="black" />
            <Text style={styles.menuText}>Push Notification</Text>
          </View>
          <Switch
            value={isPushEnabled}
            onValueChange={toggleSwitch}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isPushEnabled ? "#f5dd4b" : "#f4f3f4"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Akun</Text>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("LanguageScreen")}
        >
          <View style={styles.leftContent}>
            <Icon name="language-outline" size={24} color="black" />
            <Text style={styles.menuText}>Bahasa</Text>
          </View>
          <Icon name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informasi & Bantuan</Text>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("AboutScreen")}
        >
          <View style={styles.leftContent}>
            <Icon name="information-circle-outline" size={24} color="black" />
            <Text style={styles.menuText}>Tentang Aplikasi</Text>
          </View>
          <Icon name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("HelpScreen")}
        >
          <View style={styles.leftContent}>
            <Icon name="help-circle-outline" size={24} color="black" />
            <Text style={styles.menuText}>Bantuan</Text>
          </View>
          <Icon name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Text style={styles.version}>Versi 1.0.0</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5E6D8",
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
    flexDirection: "row",
    alignItems: "center",
    top: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  section: {
    marginTop: 20,
    padding: 16,
    bottom: 10
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#B89F8D",
    padding: 16,
    borderRadius: 10,
    marginBottom: 8,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    marginLeft: 12,
  },
  logoutButton: {
    backgroundColor: "#FF0000",
    margin: 16,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  version: {
    textAlign: "center",
    color: "#666",
    marginTop: 16,
    fontSize: 14,
  },
});

export default SettingScreen;