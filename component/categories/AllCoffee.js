import { useNavigation } from "@react-navigation/native";
import React, {useCallback, useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const AllCoffee = ({ searchQuery = "" }) => {
  const navigation = useNavigation();
  const [isProcessing, setIsProcessing] = useState(false);

  const products = [
    {
      id: "all_1",
      name: "Mead Raff",
      description: "With Sugar",
      price: 50000,
      image: require("../../assets/meadRaff.png"),
      type: "regular",
      details:
        "Nikmati keanggunan sederhana dalam setiap tegukan Mead Raff kami. Kopi arabika pilihan berkualitas tinggi diseduh dengan sempurna untuk menghasilkan cita rasa kaya dan sedikit asam yang menyegarkan. Sempurna untuk memulai harimu atau menemani saat-saat santai.",
    },
    {
      id: "all_2",
      name: "Java Coffee",
      description: "With Sugar",
      price: 35000,
      image: require("../../assets/javaCoffee.png"),
      type: "regular",
      details:
        "Java Coffee kami menghadirkan cita rasa authentic dari tanah Jawa. Dipetik dan diolah dengan hati-hati untuk memberikan pengalaman kopi yang tak terlupakan.",
    },
    {
      id: "all_3",
      name: "Turkish Coffee",
      description: "With Sugar",
      price: 35000,
      image: require("../../assets/turkishCoffee.png"),
      type: "special",
      details:
        "Rasakan pengalaman kopi khas Turki dengan metode penyeduhan tradisional. Kopi yang kental dengan aroma yang kuat akan membawa Anda dalam perjalanan rasa yang eksotis.",
    },
    {
      id: "all_4",
      name: "Dish Ice Cream",
      description: "With Sugar",
      price: 20000,
      image: require("../../assets/dishIceCream.png"),
      type: "special",
      details:
        "Es krim lembut dengan pilihan topping yang menarik. Paduan sempurna antara krim segar dan rasa manis yang seimbang.",
    },
  ];

  const handleAddToCart = useCallback((product) => {
    navigation.navigate("Order", { screen: "OrderMain", params: { product } });
  }, [navigation]);

  const filteredProducts = searchQuery
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  const specialProducts = filteredProducts.filter((p) => p.type === "special");
  const regularProducts = filteredProducts.filter((p) => p.type === "regular");

  return (
    <View style={styles.categoriesContainer}>
      {regularProducts.length > 0 && (
        <>
          <View style={styles.product}>
            <View style={styles.overlap4}>
              <Image
                source={regularProducts[0].image}
                style={styles.maskGroup}
              />
              <Text style={styles.textWrapper6}>{regularProducts[0].name}</Text>
              <Text style={styles.textWrapper7}>
                {regularProducts[0].description}
              </Text>
              <View style={styles.idr}>
                <View style={styles.overlapGroup2}>
                  <Text style={styles.textWrapper8}>
                    {regularProducts[0].price.toLocaleString()}
                  </Text>
                  <Text style={styles.textWrapper9}>Rp</Text>
                </View>
              </View>
              {/* Tambahkan TouchableOpacity untuk ikon plus */}
              <TouchableOpacity
                onPress={() => handleAddToCart(regularProducts[0])}
                style={styles.plusIconContainer}
              >
                <Image
                  source={require("../../icons/akar-icons-circle-plus-fill.png")}
                  // style={styles.akarIconsCircle}
                />
              </TouchableOpacity>
            </View>
          </View>

          {regularProducts.length > 1 && (
            <View style={styles.product5}>
              <View style={styles.overlap7}>
                <Image
                  source={regularProducts[1].image}
                  style={styles.maskGroup4}
                />
                <Text style={styles.textWrapper6}>
                  {regularProducts[1].name}
                </Text>
                <Text style={styles.textWrapper7}>
                  {regularProducts[1].description}
                </Text>
                <View style={styles.idr}>
                  <View style={styles.overlapGroup2}>
                    <Text style={styles.textWrapper8}>
                      {regularProducts[1].price.toLocaleString()}
                    </Text>
                    <Text style={styles.textWrapper9}>Rp</Text>
                  </View>
                </View>
                {/* Tambahkan TouchableOpacity untuk ikon plus */}
                <TouchableOpacity
                  onPress={() => handleAddToCart(regularProducts[1])}
                  style={styles.plusIconContainer}
                >
                  <Image
                    source={require("../../icons/akar-icons-circle-plus-fill.png")}
                    // style={styles.akarIconsCircle}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </>
      )}

      {/* Special Products Header */}
      {specialProducts.length > 0 && (
        <Text style={styles.textWrapper10}>Special Coffee</Text>
      )}

      {specialProducts.length > 0 && (
        <>
          <View style={styles.product3}>
            <View style={styles.overlap5}>
              <Image
                source={specialProducts[0].image}
                style={styles.maskGroup2}
              />
              <Text style={styles.textWrapper11}>
                {specialProducts[0].name}
              </Text>
              <Text style={styles.textWrapper12}>
                {specialProducts[0].description}
              </Text>
              <View style={styles.idr2}>
                <View style={styles.overlapGroup3}>
                  <Text style={styles.textWrapper8}>
                    {specialProducts[0].price.toLocaleString()}
                  </Text>
                  <Text style={styles.textWrapper13}>Rp</Text>
                </View>
              </View>
              {/* Tambahkan TouchableOpacity untuk ikon plus */}
              <TouchableOpacity
                onPress={() => handleAddToCart(specialProducts[0])}
                style={styles.plusIconContainer}
              >
                <Image
                  source={require("../../icons/akar-icons-circle-plus-fill.png")}
                  // style={styles.akarIconsCircle2}
                />
              </TouchableOpacity>
            </View>
          </View>

          {specialProducts.length > 1 && (
            <View style={styles.product4}>
              <View style={styles.overlap6}>
                <Image
                  source={specialProducts[1].image}
                  style={styles.maskGroup3}
                />
                <Text style={styles.textWrapper14}>
                  {specialProducts[1].name}
                </Text>
                <Text style={styles.textWrapper15}>
                  {specialProducts[1].description}
                </Text>
                <View style={styles.idr3}>
                  <View style={styles.overlapGroup4}>
                    <Text style={styles.textWrapper16}>
                      {specialProducts[1].price.toLocaleString()}
                    </Text>
                    <Text style={styles.textWrapper13}>Rp</Text>
                  </View>
                </View>
                {/* Tambahkan TouchableOpacity untuk ikon plus */}
                <TouchableOpacity
                  onPress={() => handleAddToCart(specialProducts[1])}
                  style={styles.plusIconContainer}
                >
                  <Image
                    source={require("../../icons/akar-icons-circle-plus-fill.png")}
                    // style={styles.akarIconsCircle3}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 45,
    top: 5,
  },
  product: {
    height: 208,
    left: 17,
    position: "absolute",
    top: 60,
    width: 183,
  },
  product5: {
    height: 208,
    left: 218,
    position: "absolute",
    top: 60,
    width: 183,
  },
  product3: {
    height: 208,
    left: 17,
    position: "absolute",
    top: 310,
    width: 183,
  },
  product4: {
    height: 193,
    left: 218,
    position: "absolute",
    top: 310,
    width: 179,
  },
  overlap4: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    height: 208,
    width: 179,
  },
  overlap5: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    height: 208,
    width: 179,
  },
  overlap6: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    height: 208,
    width: 179,
  },
  overlap7: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    boxShadow: "0px 4px 4px #00000040",
    height: 208,
    position: "relative",
    width: 179,
  },
  maskGroup: {
    height: 113,
    left: 3,
    position: "absolute",
    top: 4,
    width: 173,
  },
  maskGroup2: {
    height: 113,
    left: 1,
    position: "absolute",
    top: 4,
    width: 173,
  },
  maskGroup3: {
    height: 105,
    left: 5,
    position: "absolute",
    top: 4,
    width: 167,
  },
  maskGroup4: {
    height: 113,
    left: 1,
    position: "absolute",
    top: 4,
    width: 173,
  },
  textWrapper6: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    left: 16,
    position: "absolute",
    top: 129,
    width: 112,
  },
  textWrapper7: {
    color: "#000000",
    fontFamily: "Montserrat-Regular",
    fontSize: 10,
    fontWeight: "400",
    left: 16,
    position: "absolute",
    top: 153,
    width: 73,
  },
  textWrapper8: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    fontWeight: "600",
    left: 20,
    position: "absolute",
    top: 5,
    width: 80,
  },
  textWrapper9: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    fontWeight: "600",
    left: 0,
    position: "absolute",
    top: 0,
    width: 24,
  },
  textWrapper10: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    fontWeight: "bold",
    left: 27,
    position: "absolute",
    top: 280,
    width: 168,
  },
  textWrapper11: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    left: 16,
    position: "absolute",
    top: 120,
    width: 111,
  },
  textWrapper12: {
    color: "#000000",
    fontFamily: "Montserrat-Regular",
    fontSize: 10,
    fontWeight: "400",
    left: 16,
    position: "absolute",
    top: 142,
    width: 73,
  },
  textWrapper13: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    fontWeight: "600",
    left: 0,
    position: "absolute",
    top: 0,
    width: 23,
  },
  textWrapper14: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    left: 16,
    position: "absolute",
    top: 120,
    width: 109,
  },
  textWrapper15: {
    color: "#000000",
    fontFamily: "Montserrat-Regular",
    fontSize: 10,
    fontWeight: "400",
    left: 16,
    position: "absolute",
    top: 142,
    width: 71,
  },
  textWrapper16: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    fontWeight: "600",
    left: 20,
    position: "absolute",
    top: 5,
    width: 78,
  },
  idr: {
    height: 26,
    left: 16,
    position: "absolute",
    top: 170,
    width: 104,
  },
  idr2: {
    height: 24,
    left: 16,
    position: "absolute",
    top: 158,
    width: 104,
  },
  idr3: {
    height: 24,
    left: 16,
    position: "absolute",
    top: 158,
    width: 102,
  },
  overlapGroup2: {
    height: 26,
    position: "relative",
    width: 100,
  },
  overlapGroup3: {
    height: 24,
    position: "relative",
    width: 100,
  },
  overlapGroup4: {
    height: 24,
    position: "relative",
    width: 98,
  },
  plusIconContainer: {
    height: 36,
    left: 128,
    position: "absolute",
    top: 161,
    width: 39,
  },
  noResults: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 16,
    color: "#666",
    fontFamily: "Montserrat-Regular",
  },
});

export default AllCoffee;
