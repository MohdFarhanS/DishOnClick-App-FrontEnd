import React, {useCallback} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CoffeeStrong = ({ searchQuery = "" }) => {
  const navigation = useNavigation();

  const products = [
    {
      id: "strong_1",
      name: "Mead Raff",
      description: "With Sugar",
      price: 50000,
      image: require("../../assets/meadRaff.png"),
      details:
        "Mead Raff kami menghadirkan pengalaman kopi yang kuat dan berkarakter. Dibuat dari biji kopi pilihan yang dipanggang sempurna, menghasilkan rasa kopi yang bold dengan sentuhan caramel subtle.",
    },
    {
      id: "strong_2",
      name: "Dish Coffee",
      description: "With Sugar",
      price: 20000,
      image: require("../../assets/dishCoffee.png"),
      details:
        "Dish Coffee kami merupakan pilihan tepat bagi pecinta kopi dengan karakter kuat. Racikan khusus dari biji kopi premium menghasilkan rasa yang kaya dengan afterstaste yang panjang.",
    },
    {
      id: "strong_3",
      name: "Turkish Coffee",
      description: "With Sugar",
      price: 90000,
      image: require("../../assets/turkishCoffee.png"),
      details:
        "Turkish Coffee kami disajikan dengan metode tradisional Turki, menghasilkan seduhan kopi yang sangat kental dan kaya rasa. Pengalaman otentik dengan aroma yang kuat dan karakter rasa yang tidak terlupakan.",
    },
    {
      id: "strong_4",
      name: "Americano",
      description: "With Sugar",
      price: 25000,
      image: require("../../assets/americano.png"),
      details:
        "Americano kami menawarkan kesempurnaan dalam kesederhanaan. Espresso premium yang dipadukan dengan air panas, menciptakan secangkir kopi yang kuat namun smooth dengan karakter rasa yang kompleks.",
    },
  ];

  const handleAddToCart = useCallback((product) => {
    navigation.navigate("Order", { screen: "OrderMain", params: { product } });
  }, [navigation]);
  
  

  // Filter products based on search query
  const filteredProducts = searchQuery
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <View style={styles.categoriesContainer}>
      {filteredProducts.length > 0 && (
        <>
          <View style={styles.product}>
            <View style={styles.overlap4}>
              <Image
                source={filteredProducts[0].image}
                style={styles.maskGroup}
              />
              <Text style={styles.textWrapper6}>
                {filteredProducts[0].name}
              </Text>
              <Text style={styles.textWrapper7}>
                {filteredProducts[0].description}
              </Text>
              <View style={styles.idr}>
                <View style={styles.overlapGroup2}>
                  <Text style={styles.textWrapper8}>
                    {filteredProducts[0].price.toLocaleString()}
                  </Text>
                  <Text style={styles.textWrapper9}>Rp</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => handleAddToCart(filteredProducts[0])}
                style={styles.plusIconContainer}
              >
                <Image
                  source={require("../../icons/akar-icons-circle-plus-fill.png")}
                  style={styles.akarIconsCircle}
                />
              </TouchableOpacity>
            </View>
          </View>

          {filteredProducts.length > 1 && (
            <View style={styles.product5}>
              <View style={styles.overlap7}>
                <Image
                  source={filteredProducts[1].image}
                  style={styles.maskGroup4}
                />
                <Text style={styles.textWrapper6}>
                  {filteredProducts[1].name}
                </Text>
                <Text style={styles.textWrapper7}>
                  {filteredProducts[1].description}
                </Text>
                <View style={styles.idr}>
                  <View style={styles.overlapGroup2}>
                    <Text style={styles.textWrapper8}>
                      {filteredProducts[1].price.toLocaleString()}
                    </Text>
                    <Text style={styles.textWrapper9}>Rp</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => handleAddToCart(filteredProducts[1])}
                  style={styles.plusIconContainer}
                >
                  <Image
                    source={require("../../icons/akar-icons-circle-plus-fill.png")}
                    style={styles.akarIconsCircle}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {filteredProducts.length > 2 && (
            <View style={styles.product3}>
              <View style={styles.overlap5}>
                <Image
                  source={filteredProducts[2].image}
                  style={styles.maskGroup2}
                />
                <Text style={styles.textWrapper11}>
                  {filteredProducts[2].name}
                </Text>
                <Text style={styles.textWrapper12}>
                  {filteredProducts[2].description}
                </Text>
                <View style={styles.idr2}>
                  <View style={styles.overlapGroup3}>
                    <Text style={styles.textWrapper8}>
                      {filteredProducts[2].price.toLocaleString()}
                    </Text>
                    <Text style={styles.textWrapper13}>Rp</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => handleAddToCart(filteredProducts[2])}
                  style={styles.plusIconContainer}
                >
                  <Image
                    source={require("../../icons/akar-icons-circle-plus-fill.png")}
                    style={styles.akarIconsCircle2}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {filteredProducts.length > 3 && (
            <View style={styles.product4}>
              <View style={styles.overlap6}>
                <Image
                  source={filteredProducts[3].image}
                  style={styles.maskGroup3}
                />
                <Text style={styles.textWrapper14}>
                  {filteredProducts[3].name}
                </Text>
                <Text style={styles.textWrapper15}>
                  {filteredProducts[3].description}
                </Text>
                <View style={styles.idr3}>
                  <View style={styles.overlapGroup4}>
                    <Text style={styles.textWrapper16}>
                      {filteredProducts[3].price.toLocaleString()}
                    </Text>
                    <Text style={styles.textWrapper13}>Rp</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => handleAddToCart(filteredProducts[3])}
                  style={styles.plusIconContainer}
                >
                  <Image
                    source={require("../../icons/akar-icons-circle-plus-fill.png")}
                    style={styles.akarIconsCircle3}
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
    height: 193,
    left: 17,
    position: "absolute",
    top: 310,
    width: 182,
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
    boxShadow: "0px 4px 4px #00000040",
    height: 193,
    position: "relative",
    width: 178,
  },
  overlap6: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    boxShadow: "0px 4px 4px #00000040",
    height: 193,
    position: "relative",
    width: 175,
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
    left: 1,
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
  akarIconsCircle: {
    height: 36,
    left: 128,
    position: "absolute",
    top: 161,
    width: 39,
  },
  akarIconsCircle2: {
    height: 33,
    left: 128,
    position: "absolute",
    top: 149,
    width: 39,
  },
  akarIconsCircle3: {
    height: 33,
    left: 125,
    position: "absolute",
    top: 149,
    width: 38,
  },
});

export default CoffeeStrong;
