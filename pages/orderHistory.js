import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderHistory = ({ route }) => {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      try {
        const savedOrders = await AsyncStorage.getItem('orders');
        if (savedOrders) {
          setOrders(JSON.parse(savedOrders));
        }
      } catch (error) {
        console.error('Error loading orders:', error);
      }
    });

    return unsubscribe;
  }, [navigation]);

  // Handle new order
  useEffect(() => {
    const handleNewOrder = async () => {
      if (route.params?.newOrder) {
        try {
          const savedOrders = await AsyncStorage.getItem('orders');
          let currentOrders = savedOrders ? JSON.parse(savedOrders) : [];
          
          const orderExists = currentOrders.some(
            order => order.orderId === route.params.newOrder.orderId
          );
          
          if (!orderExists) {
            const newOrders = [...currentOrders, route.params.newOrder];
            await AsyncStorage.setItem('orders', JSON.stringify(newOrders));
            setOrders(newOrders);
          } else {
            setOrders(currentOrders);
          }
        } catch (error) {
          console.error('Error handling new order:', error);
        }
      }
    };
  
    handleNewOrder();
  }, [route.params?.newOrder]);

  const OrderCard = ({ order }) => (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <View>
          <Text style={styles.orderId}>Order #{order.orderId}</Text>
          <Text style={styles.orderDate}>{order.date}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Berhasil</Text>
        </View>
      </View>

      <View style={styles.orderDetails}>
        <Text style={styles.productName}>{order.productName}</Text>
        <View style={styles.quantityPrice}>
          <Text style={styles.quantity}>x{order.quantity}</Text>
          <Text style={styles.price}>Rp {order.price?.toLocaleString()}</Text>
        </View>
      </View>

      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Total Pembayaran</Text>
        <Text style={styles.totalAmount}>Rp {order.total?.toLocaleString()}</Text>
      </View>

      <Text style={styles.paymentText}>Via {order.paymentMethod}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order History</Text>
      </View>

      {orders.length > 0 ? (
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {orders.map((order, index) => (
            <OrderCard key={`${order.orderId}-${index}`} order={order} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../assets/blurBg.png')}
            style={styles.emptyImage}
            resizeMode="contain"
          />
          <View style={styles.emptyContent}>
            <Text style={styles.emptyTitle}>No Order Yet</Text>
            <Text style={styles.emptySubtitle}>
              Order our Specialty Coffee now
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    top : 10
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginLeft: 8,
    top: 10
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#cecdcd',
  },
  scrollViewContent: {
    padding: 16,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  orderDate: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
  },
  statusContainer: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  productName: {
    fontSize: 14,
    color: '#000000',
    flex: 1,
  },
  quantityPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 14,
    color: '#666666',
    marginRight: 8,
  },
  price: {
    fontSize: 14,
    color: '#8B4513',
    fontWeight: '600',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    marginBottom: 8,
  },
  totalText: {
    fontSize: 14,
    color: '#666666',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  paymentText: {
    fontSize: 12,
    color: '#666666',
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyImage: {
    width: '80%',
    height: 200,
    marginBottom: 20,
  },
  emptyContent: {
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
});

export default OrderHistory;