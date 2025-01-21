import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { allProducts } from "../src/data/product";

const Favorite = ({ navigation }) => {
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
        <ScrollView style={styles.content}>
          {allProduct.map((item, index) => (
            <MenuItem
              key={index}
              title={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.image}
            />
          ))}
        </ScrollView>
      </View>
    );
  };
  
  // Component untuk Item Menu
  const MenuItem = ({ title, description, price, imageUrl }) => {
    return (
      <View style={styles.menuItem}>
        <Image 
          source={imageUrl} // Menggunakan require langsung dari allProduct
          style={styles.menuImage}
        />
        <View style={styles.menuInfo}>
          <Text style={styles.menuTitle}>{title}</Text>
          <Text style={styles.menuDescription}>{description}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.pricePrefix}>Rp</Text>
            <Text style={styles.price}>{price}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#cecdcd',
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
      justifyContent: 'center',
      alignItems: 'center',
      top: 10
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000000',
      marginLeft: 8,
      top: 10
    },
    backText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000000',
      marginLeft: 8,
      top: 10
    },
    content: {
      flex: 1,
      padding: 16,
    },
    menuItem: {
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      marginBottom: 16,
      flexDirection: 'column',
      shadowColor: '#000',
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
      height: 120,
      borderRadius: 8,
    },
    menuInfo: {
      marginTop: 8,
    },
    menuTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    menuDescription: {
      fontSize: 14,
      color: '#666',
      marginBottom: 8,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    pricePrefix: {
      fontSize: 14,
      color: '#000',
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      flex: 1,
      marginLeft: 4,
    },
    addButton: {
      backgroundColor: '#fff',
      width: 24,
      height: 24,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
    },
    addButtonText: {
      fontSize: 16,
      color: '#666',
    },
  });


export default Favorite;