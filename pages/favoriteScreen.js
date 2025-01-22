import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { allProducts } from "../src/data/product";

const Favorite = ({ navigation }) => {
  const [favoriteItems, setFavoriteItems] = useState(allProducts);

  const handleAddToCart = (item) => {
    Alert.alert("Add to Cart", `Do you want to add ${item.name} to cart?`, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          // Implementasi logika add to cart di sini
          Alert.alert("Success", "Item added to cart!");
        },
      },
    ]);
  };
  const handleImageError = (itemName) => {
    console.warn(`Failed to load image for ${itemName}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu Favorite</Text>
      </View>

      {/* Content */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {favoriteItems.length > 0 ? (
          favoriteItems.map((item, index) => (
            <MenuItem
              key={item.id || index}
              item={item}
              onAddToCart={() => handleAddToCart(item)}
              onImageError={() => handleImageError(item.name)}
            />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No favorite items yet</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const MenuItem = ({ item, onAddToCart, onImageError }) => {
  const formatPrice = (price) => {
    return price.toLocaleString('id-ID');
  };

  return (
    <View style={styles.menuItem}>
      <Image 
        source={item.image}
        style={styles.menuImage}
        onError={onImageError}
        resizeMode="cover"
      />
      <View style={styles.menuInfo}>
        <Text style={styles.menuTitle}>{item.name}</Text>
        <Text style={styles.menuDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.pricePrefix}>Rp</Text>
          <Text style={styles.price}>{formatPrice(item.price)}</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={onAddToCart}
          >
            <Ionicons name="add" size={16} color="#8B4513" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cecdcd",
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
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    top: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
    marginLeft: 8,
    top: 10,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  menuItem: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
  menuInfo: {
    marginTop: 12,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: '#000000',
  },
  menuDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  pricePrefix: {
    fontSize: 14,
    color: "#000",
    fontWeight: '500',
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 4,
    color: '#8B4513',
  },
  addButton: {
    backgroundColor: '#FFF',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B4513',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 100,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});

export default Favorite;
