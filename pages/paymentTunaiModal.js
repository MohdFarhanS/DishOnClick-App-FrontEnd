import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

const PaymentTunaiModal = ({
  visible,
  onClose,
  total,
  paymentMethod,
  navigation,
  orderDetails,
}) => {
  const handleViewOrder = () => {
    const orderDetailsWithId = {
      ...orderDetails,
      orderId: Date.now().toString(), // Menambahkan orderId unik
      date: new Date().toLocaleDateString(), // Tambahkan tanggal
    };
    onClose();
    setTimeout(() => {
      navigation.navigate("OrderHistory", { newOrder: orderDetailsWithId });
    }, 100);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.paymentDetails}>
            <Text style={styles.totalText}>
              Total: Rp {total.toLocaleString()}
            </Text>
            <Text style={styles.methodText}>Metode: {paymentMethod}</Text>
          </View>

          <View style={styles.successMessage}>
            <Text style={styles.thankYouText}>Thank you</Text>
            <Text style={styles.processingText}>
              Your order is being processed!
            </Text>
          </View>

          <TouchableOpacity
            style={styles.viewOrderButton}
            onPress={handleViewOrder}
          >
            <Text style={styles.viewOrderText}>View Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#4A4A4A",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  paymentDetails: {
    alignItems: "center",
    marginBottom: 20,
  },
  totalText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  methodText: {
    color: "white",
    fontSize: 16,
  },
  successMessage: {
    alignItems: "center",
    marginBottom: 20,
  },
  thankYouText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  processingText: {
    color: "white",
    fontSize: 14,
  },
  viewOrderButton: {
    backgroundColor: "#8B4513",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: "100%",
  },
  viewOrderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default PaymentTunaiModal;
