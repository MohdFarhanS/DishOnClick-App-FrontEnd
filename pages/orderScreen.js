import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OrderScreen = ({ navigation, route }) => {
  const product = route.params?.product || {
    price: 0,
    name: '',
    description: '',
    details: '',
    image: null
  };
  const [cupSize, setCupSize] = useState("Small");
  const [sugarLevel, setSugarLevel] = useState("No Sugar");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkIfFavorite();
  }, []);

  const checkIfFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        const favoritesArray = JSON.parse(favorites);
        const isProductFavorite = favoritesArray.some(fav => fav.id === product.id);
        setIsFavorite(isProductFavorite);
      }
    } catch (error) {
      console.error('Error checking favorites:', error);
    }
  };

  const toggleFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      let favoritesArray = favorites ? JSON.parse(favorites) : [];

      if (isFavorite) {
        // Hapus dari favorit
        favoritesArray = favoritesArray.filter(fav => fav.id !== product.id);
      } else {
        // Tambah ke favorit
        favoritesArray.push({
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          image: product.image
        });
      }

      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const sizes = ["Small", "Medium", "Large"];
  const sugarLevels = ["No Sugar", "Low", "Medium"];

  const totalPrice = product.price * quantity;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.heartButton, isFavorite && styles.heartButtonActive]}
          onPress={toggleFavorite}
        >
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={24} 
            color={isFavorite ? "#FF4B4B" : "white"} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.subtitle}>{product.description}</Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Cup Size</Text>
              <View style={styles.optionsContainer}>
                {sizes.map((size) => (
                  <TouchableOpacity
                    key={size}
                    style={[
                      styles.option,
                      cupSize === size && styles.selectedOption,
                    ]}
                    onPress={() => setCupSize(size)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        cupSize === size && styles.selectedOptionText,
                      ]}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Level Sugar</Text>
              <View style={styles.optionsContainer}>
                {sugarLevels.map((level) => (
                  <TouchableOpacity
                    key={level}
                    style={[
                      styles.option,
                      sugarLevel === level && styles.selectedOption,
                    ]}
                    onPress={() => setSugarLevel(level)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        sugarLevel === level && styles.selectedOptionText,
                      ]}
                    >
                      {level}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Ionicons name="remove" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(quantity + 1)}
              >
                <Ionicons name="add" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.sectionTitle}>Details</Text>
              <Text style={styles.detailsText}>{product.details}</Text>
            </View>

            <View style={styles.bottomPadding} />
          </View>
        </ScrollView>

        <View style={styles.addToCartContainer}>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => navigation.navigate("OrderSummary", {
              product: {
                ...product,
                selectedSize: cupSize,
                selectedSugar: sugarLevel,
                quantity: quantity,
                totalPrice: totalPrice,
                orderDate: new Date().toISOString() // Tambahkan tanggal pesanan
              }
            })}            
          >
            <Text style={styles.addToCartText}>Add to cart</Text>
            <View style={styles.divider} />
            <Text style={styles.addToCartPrice}>
              Rp {totalPrice.toLocaleString()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContent: {
    paddingBottom: 100, // Increased padding to prevent content from being hidden behind the button
  },
  heartButtonActive: {
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  addToCartWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imageContainer: {
    height: 300,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  heartButton: {
    position: "absolute",
    top: 40,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  option: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
  },
  selectedOption: {
    backgroundColor: "#8B4513",
  },
  optionText: {
    color: "#333",
  },
  selectedOptionText: {
    color: "white",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 15,
  },
  quantityButton: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "600",
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailsText: {
    color: "#666",
    lineHeight: 20,
  },
  bottomPadding: {
    height: 20,
  },
  addToCartContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopColor: "#F0F0F0",
    top: 490,
  },
  addToCartButton: {
    flexDirection: "row",
    backgroundColor: "#8B4513",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 15,
  },
  addToCartPrice: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 15,
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
});

export default OrderScreen;
