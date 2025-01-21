import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PaymentTunaiModal from "./paymentTunaiModal";

const PaymentScreen = ({ navigation, route }) => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const { product } = route.params || {};

  const generateOrderId = () => {
    return `ORD-${Math.floor(Math.random() * 9000000000) + 1000000000}`;
  };

  const orders = [
    {
      name: product?.name || "Coffee",
      quantity: product?.quantity || 1,
      price: product?.price || 0,
      size: product?.selectedSize || "Small",
      sugarLevel: product?.selectedSugar || "No Sugar",
    },
  ];

  const totalPayment = orders.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    console.log("Product data:", product);

    const newOrder = {
      orderId: generateOrderId(),
      date: new Date().toLocaleString(),
      productName: orders[0].name, // Menggunakan data dari orders array
      quantity: orders[0].quantity,
      price: orders[0].price,
      total: totalPayment,
      paymentMethod: selectedPayment === "tunai" ? "Tunai" : "QRIS",
      status: "Berhasil",
    };

    console.log("New order created:", newOrder);

    setCurrentOrder(newOrder);

    if (selectedPayment === "tunai") {
      setIsModalVisible(true);
    }
    // Add handling for QRIS payment if needed
  };

  // Add this handler for closing the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
    // Add any additional logic needed when closing the modal
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order</Text>
      </View>

      {/* Order Summary Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Order Summary</Text>
        {orders.map((order, index) => (
          <View key={index} style={styles.orderItem}>
            <View style={styles.orderDetails}>
              <Text style={styles.orderText}>
                {order.name}
                {"\n"}x{order.quantity}
              </Text>
              <Text style={styles.orderSpecs}>
                Size: {order.size} • Sugar: {order.sugarLevel}
              </Text>
            </View>
            <Text style={styles.priceText}>
              Rp {order.price.toLocaleString()}
            </Text>
          </View>
        ))}

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Pembayaran:</Text>
          <Text style={styles.totalAmount}>
            Rp {totalPayment.toLocaleString()}
          </Text>
        </View>
      </View>

      {/* Payment Method Section */}
      <Text style={styles.sectionTitle}>Metode Pembayaran</Text>

      {/* Payment Options */}
      <View style={styles.paymentOptionsContainer}>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPayment === "tunai" && styles.selectedPayment,
          ]}
          onPress={() => setSelectedPayment("tunai")}
        >
          <Image
            source={require("../icons/cash.png")}
            style={styles.paymentIcon}
          />
          <Text style={styles.paymentText}>Tunai</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPayment === "qris" && styles.selectedPayment,
          ]}
          onPress={() => setSelectedPayment("qris")}
        >
          <Image
            source={require("../icons/qris.png")}
            style={styles.paymentIconQris}
          />
          <Text style={styles.paymentText}>Qris</Text>
        </TouchableOpacity>
      </View>

      {/* Pay Now Button */}
      <TouchableOpacity
        style={[styles.payButton, !selectedPayment && styles.payButtonDisabled]}
        onPress={handlePayment}
        disabled={!selectedPayment}
      >
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>

      <PaymentTunaiModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        total={totalPayment}
        paymentMethod={selectedPayment === "tunai" ? "Cash" : "QRIS"}
        navigation={navigation}
        orderDetails={currentOrder}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  orderDetails: {
    flex: 1,
  },
  orderSpecs: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    height: 90,
  },
  backButton: {
    marginRight: 16,
    top: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    top: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    margin: 16,
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  orderText: {
    fontSize: 14,
    lineHeight: 20,
  },
  priceText: {
    fontSize: 14,
    fontWeight: "500",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  totalText: {
    fontSize: 14,
    fontWeight: "500",
  },
  totalAmount: {
    fontSize: 14,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 16,
    marginTop: 16,
  },
  paymentOptionsContainer: {
    margin: 16,
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  selectedPayment: {
    backgroundColor: "#F0F0F0",
  },
  paymentIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  paymentIconQris: {
    marginRight: 7,
  },
  paymentText: {
    fontSize: 14,
    fontWeight: "500",
  },
  payButton: {
    backgroundColor: "#8B4513",
    margin: 16,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  payButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default PaymentScreen;
