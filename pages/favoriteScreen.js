import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Favorite = ({ navigation }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      if (favorites) {
        setFavoriteItems(JSON.parse(favorites));
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  };

  const removeFavorite = async (itemId) => {
    Alert.alert(
      "Hapus dari Favorit",
      "Apakah Anda yakin ingin menghapus item ini dari favorit?",
      [
        {
          text: "Batal",
          style: "cancel",
        },
        {
          text: "Hapus",
          onPress: async () => {
            try {
              const updatedFavorites = favoriteItems.filter(
                (item) => item.id !== itemId
              );
              await AsyncStorage.setItem(
                "favorites",
                JSON.stringify(updatedFavorites)
              );
              setFavoriteItems(updatedFavorites);
            } catch (error) {
              console.error("Error removing favorite:", error);
            }
          },
        },
      ]
    );
  };

  const navigateToOrder = (item) => {
    console.log("Navigating to Order with item:", item);
    navigation.navigate("AppNavigator", {
      screen: "Order",
      params: {
        screen: "OrderMain",
        params: {
          product: item,
        },
      },
    });
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
        <Text style={styles.headerTitle}>Menu Favorit</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {favoriteItems.length > 0 ? (
          favoriteItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              // onPress={() => navigateToOrder(item)}
            >
              <Image
                source={item.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <TouchableOpacity
                    style={styles.heartButton}
                    onPress={() => removeFavorite(item.id)}
                  >
                    <Ionicons name="heart" size={24} color="#FF4B4B" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.cardDescription} numberOfLines={2}>
                  {item.description}
                </Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.price}>
                    Rp {item.price.toLocaleString("id-ID")}
                  </Text>
                  <TouchableOpacity
                    style={styles.orderButton}
                    onPress={() => navigateToOrder(item)}
                  >
                    <Text style={styles.orderButtonText}>Pesan</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="heart-outline" size={64} color="#666666" />
            <Text style={styles.emptyStateText}>Belum ada menu favorit</Text>
            <Text style={styles.emptyStateSubtext}>
              Tambahkan menu favorit Anda dengan menekan ikon hati pada menu
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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
    top: 10
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 16,
    top: 10
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  heartButton: {
    padding: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#8B4513",
  },
  orderButton: {
    backgroundColor: "#8B4513",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  orderButtonText: {
    color: "white",
    fontWeight: "600",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#666666",
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: "#999999",
    textAlign: "center",
    marginTop: 8,
    paddingHorizontal: 32,
  },
});

export default Favorite;
