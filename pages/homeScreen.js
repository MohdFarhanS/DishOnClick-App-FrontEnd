import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import AllCoffee from "../component/categories/AllCoffee";
import CoffeeStrong from "../component/categories/CoffeeStrong";
import CoffeeCreamy from "../component/categories/CoffeeCreamy";
import NoCoffee from "../component/categories/NoCoffee";
import { allProducts } from "../src/data/product";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("All Coffee");
  const [searchQuery, setSearchQuery] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const { username: storedUsername } = JSON.parse(userData);
          setUsername(storedUsername);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUserData();
  }, []);

  const categories = [
    "All Coffee",
    "Coffee Strong",
    "Coffee Creamy",
    "No Coffee",
  ];

  const findProductCategory = (searchQuery) => {
    if (searchQuery.trim() === "") return;

    for (const [category, products] of Object.entries(allProducts)) {
      const found = products.some((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (found) {
        setSelectedCategory(category);
        return;
      }
    }
  };

  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "All Coffee":
        return <AllCoffee searchQuery={searchQuery} />;
      case "Coffee Strong":
        return <CoffeeStrong searchQuery={searchQuery} />;
      case "Coffee Creamy":
        return <CoffeeCreamy searchQuery={searchQuery} />;
      case "No Coffee":
        return <NoCoffee searchQuery={searchQuery} />;
      default:
        return <AllCoffee searchQuery={searchQuery} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.navbar}>
          <View style={styles.navContent}>
            <View style={styles.logoSection}>
              <View style={styles.logoContainer}>
                <Image
                  source={require("../icons/homeScreenLogo.png")}
                  style={styles.geminiGenerated}
                />
                <View style={styles.logoText}>
                  <Text style={styles.textWrapper21}>DISHONCLICK!</Text>
                  <Text style={styles.coffeeRoastery}>COFFEE & ROASTERY</Text>
                </View>
              </View>
            </View>

            <View style={styles.navIcons}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => navigation.navigate("OrderHistory", {fromHomeScreen: true})}
              >
                <Ionicons name="receipt-outline" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => navigation.navigate("Favorite")}
              >
                <AntDesign name="hearto" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => navigation.navigate("Notification")}
              >
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView
         vertical
          style={styles.verticalScroll}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.page}>
            <View style={styles.overlapWrapper}>
              <View style={styles.overlap}>
                <View style={styles.rectangle} />
                <Text style={styles.textWrapper}>Good morning, {username}</Text>

                <View style={styles.search}>
                  <Image
                    source={require("../icons/akar-icons-search.png")}
                    style={styles.akarIconsSearch}
                  />

                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search Coffee..."
                    value={searchQuery}
                    onChangeText={(text) => {
                      setSearchQuery(text);
                      findProductCategory(text);
                    }}
                    placeholderTextColor="#000000"
                  />
                </View>

                <Text style={styles.div}>Categories</Text>

                <View style={styles.categoriesContainer}>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.categoryScroll}
                    contentContainerStyle={styles.categoryContentContainer}
                  >
                    {categories.map((category) => (
                      <TouchableOpacity
                        key={category}
                        onPress={() => setSelectedCategory(category)}
                        style={styles.categoryItem}
                      >
                        <View
                          style={[
                            styles.categoryBox,
                            selectedCategory === category && {
                              backgroundColor: "#763809",
                            },
                          ]}
                        >
                          <Image
                            source={require("../icons/gg-coffee.png")}
                            style={styles.categoryIcon}
                          />
                          <Text
                            style={[
                              styles.categoryText,
                              selectedCategory === category && {
                                color: "#fff",
                              },
                            ]}
                          >
                            {category}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>

                  {renderCategoryContent()}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    right: 0,
    backgroundColor: "#cecdcd",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    bottom: 25,
  },
  categoriesContainer: {
    top: 227,
    left: 0,
    right: 0,
    height: 45,
  },
  categoryScroll: {
    flexGrow: 0,
    paddingLeft: 5,
  },
  categoryItem: {
    marginRight: 8,
  },
  categoryBox: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    height: 33,
    width: 105,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  categoryText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 9,
    fontWeight: "600",
    color: "#000000",
  },
  categoryContentContainer: {
    paddingLeft: 27,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    paddingHorizontal: 90,
  },
  container: {
    flex: 1,
    backgroundColor: "#cecdcd",
  },
  verticalScroll: {
    flex: 1,
    marginTop: 60,
  },
  navbar: {
    height: 100,
    backgroundColor: "#ffffff",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 3,
    paddingTop: 25,
  },
  navContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: "100%",
  },
  logoText: {
    justifyContent: "center",
  },
  navIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 5,
  },
  iconButton: {
    padding: 6,
  },
  logoSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  overlapWrapper: {
    backgroundColor: "#cecdcd",
    borderColor: "#e3d5ca",
    borderWidth: 1,
    minHeight: 823,
    overflow: "hidden",
    width: 411,
  },
  overlap: {
    minHeight: 823,
    position: "relative",
    width: 476,
  },
  rectangle: {
    backgroundColor: "#f4f4f4",
    borderRadius: 30,
    height: 51,
    left: 29,
    position: "absolute",
    top: 115,
    width: 353,
  },
  textWrapper: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    fontWeight: "bold",
    left: 29,
    position: "absolute",
    marginLeft: 16,
    margintop: 12,
    top: 85,
    width: 168,
  },
  search: {
    height: 27,
    left: 48,
    position: "absolute",
    top: 128,
    width: 310,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "transparent",
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 37,
    height: "100%",
    padding: 0,
  },
  akarIconsSearch: {
    height: 19,
    left: 0,
    position: "absolute",
    top: 3,
    width: 19,
  },
  div: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    fontWeight: "bold",
    left: 29,
    position: "absolute",
    top: 186,
    width: 168,
  },
  textWrapper21: {
    color: "#000000",
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 2,
    right: 9,
  },
  coffeeRoastery: {
    color: "#000000",
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    fontWeight: "400",
    right: 9,
  },
  geminiGenerated: {
    height: 46,
    width: 46,
    marginRight: 8,
    bottom: 3,
  },
});

export default HomeScreen;
