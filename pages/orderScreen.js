import React, { useState } from "react";
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

const OrderScreen = ({ navigation }) => {
  const [cupSize, setCupSize] = useState("Small");
  const [sugarLevel, setSugarLevel] = useState("No Sugar");
  const [quantity, setQuantity] = useState(2);

  const sizes = ["Small", "Medium", "Large"];
  const sugarLevels = ["No Sugar", "Low", "Medium"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/mrBesar.png")} style={styles.image} />
        <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.heartButton}>
          <Ionicons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Mead Raff</Text>
            <Text style={styles.subtitle}>less Sugar</Text>

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
              <Text style={styles.detailsText}>
                Nikmati keangungan sederhana dalam setiap tegukan Americano
                kami. Kopi arabika pilihan berkualitas tinggi diseduh dengan
                sempurna untuk menghasilkan cita rasa kaya dan sedikit asam yang
                menyegarkan. Sempurna untuk memulai harimu atau menemani
                saat-saat santai.
              </Text>
            </View>

            {/* Added padding at bottom for better scrolling */}
            <View style={styles.bottomPadding} />
          </View>
        </ScrollView>

        {/* Add to cart button outside ScrollView to keep it fixed */}
        <View style={styles.addToCartContainer}>
          <TouchableOpacity 
            style={styles.addToCartButton}
              onPress={() => navigation.navigate("OrderSummary")}
              >
            <Text style={styles.addToCartText}>Add to cart</Text>
            <View style={styles.divider} />
            <Text style={styles.addToCartPrice}>Rp 50.000</Text>
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopColor: '#F0F0F0',
    top: 490,
  },
  addToCartButton: {
    flexDirection: "row",
    backgroundColor: "#8B4513",
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%'
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
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
});

export default OrderScreen;
