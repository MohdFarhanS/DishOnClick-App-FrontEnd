import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const SearchResults = ({ searchQuery, onSelectCategory }) => {
  // Sample product data structure - you should replace this with your actual data
  const allProducts = {
    "All Coffee": [
      {
        id: 'all_1',
        name: "Mead Raff",
        description: "With Sugar",
        price: 50000,
        image: require("../assets/meadRaff.png"),
        type: "regular",
      },
      {
        id: 'all_2',
        name: "Java Coffee",
        description: "With Sugar",
        price: 35000,
        image: require("../assets/javaCoffee.png"),
        type: "regular",
      },
      {
        id: 'all_3',
        name: "Turkish Coffee",
        description: "With Sugar",
        price: 35000,
        image: require("../assets/turkishCoffee.png"),
        type: "special",
      },
      {
        id: 'all_4',
        name: "Dish Ice Cream",
        description: "With Sugar",
        price: 20000,
        image: require("../assets/dishIceCream.png"),
        type: "special",
      },
    ],
    "Coffee Strong": [
    {
      id: 'strong_1',
      name: 'Mead Raff',
      description: 'With Sugar',
      price: 50000,
      image: require("../assets/meadRaff.png"),
    },
    {
      id: 'strong_2',
      name: 'Dish Coffee',
      description: 'With Sugar',
      price: 20000,
      image: require("../assets/dishCoffee.png"),
    },
    {
      id: 'strong_3',
      name: 'Turkish Coffee',
      description: 'With Sugar',
      price: 35000,
      image: require("../assets/turkishCoffee.png"),
    },
    {
      id: 'strong_4',
      name: 'Americano',
      description: 'With Sugar',
      price: 25000,
      image: require("../assets/americano.png"),
    },
    ],
    "Coffee Creamy": [
      {
        id: 'creamy_1',
        name: 'Cappucchino',
        description: 'With Sugar',
        price: 35000,
        image: require("../assets/cappucchino.png"),
      },
      {
        id: 'creamy_2',
        name: 'Java Coffee',
        description: 'With Sugar',
        price: 35000,
        image: require("../assets/javaCoffee.png"),
      },
      {
        id: 'creamy_3',
        name: 'Maxican Coffee',
        description: 'With Sugar',
        price: 35000,
        image: require("../assets/maxicanCoffee.png"),
      },
      {
        id: 'creamy_4',
        name: 'Macchiato',
        description: 'With Sugar',
        price: 25000,
        image: require("../assets/macchiato.png"),
      },
    ],
    "No Coffee": [
      {
        id: 'no_1',
        name: 'Virgin Mojito',
        description: 'With Sugar',
        price: 25000,
        image: require("../../assets/virginMojito.png"),
      },
      {
        id: 'no_2',
        name: 'Dish Ice Cream',
        description: 'With Sugar',
        price: 20000,
        image: require("../../assets/dishIceCream.png"),
      },
      {
        id: 'no_3',
        name: 'Vienna Blue',
        description: 'With Sugar',
        price: 25000,
        image: require("../../assets/viennaBlue.png"),
      },
      {
        id: 'no_4',
        name: 'Matcha Pistachio',
        description: 'With Sugar',
        price: 20000,
        image: require("../../assets/matchaPistachio.png"),
      },
    ],
  };

  const searchAcrossCategories = () => {
    const results = [];
    Object.entries(allProducts).forEach(([category, products]) => {
      products.forEach((product) => {
        if (product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({
            ...product,
            category,
          });
        }
      });
    });
    return results;
  };

  const searchResults = searchQuery ? searchAcrossCategories() : [];

  if (!searchQuery) return null;

  return (
    <View style={styles.searchResultsContainer}>
      {searchResults.length > 0 ? (
        searchResults.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.resultItem}
            onPress={() => onSelectCategory(item.category)}
          >
            <View style={styles.resultContent}>
              <Image
                source={require("../icons/gg-coffee.png")}
                style={styles.productIcon}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.categoryLabel}>in {item.category}</Text>
                <Text style={styles.price}>IDR {item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noResults}>No products found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchResultsContainer: {
    // position: "absolute",
  top: 51, // Ubah dari 170 ke 55 agar tepat di bawah search box
  left: 29, // Sesuaikan dengan posisi search box
  right: 29, // Sesuaikan dengan posisi search box
  backgroundColor: "#ffffff",
  borderRadius: 15, // Perbesar radius untuk tampilan lebih modern
  elevation: 4,
  zIndex: 1000,
  maxHeight: 300,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.15,
  shadowRadius: 3.84,
},
  resultItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    marginHorizontal: 8,
  },
  resultContent: {
    flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: 8,
  },
  productIcon: {
    width: 32, // Perbesar icon
  height: 32, // Perbesar icon
  marginRight: 16,
  backgroundColor: "#f8f8f8", // Tambah background untuk icon
  padding: 4,
  borderRadius: 8,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontFamily: "Montserrat-SemiBold",
  fontSize: 15, // Perbesar font
  color: "#000",
  marginBottom: 4,
  },
  categoryLabel: {
    fontFamily: "Montserrat-Regular",
  fontSize: 12,
  color: "#666",
  marginBottom: 4,
  },
  price: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    color: "#763809",
    marginTop: 2,
  },
  noResults: {
    padding: 16,
    textAlign: "center",
    color: "#666",
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
});

export default SearchResults;
