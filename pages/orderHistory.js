import React, { useState, useEffect }  from 'react';
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
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderHistory = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [orders, setOrders] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.newOrder) {
        console.log('New order received:', route.params.newOrder); // Debug log
        setOrders(prevOrders => {
          const updatedOrders = [...prevOrders, route.params.newOrder];
          console.log('Updated orders:', updatedOrders); // Debug log
          return updatedOrders;
        });
      }
    }, [route.params?.newOrder])
  );

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const savedOrders = await AsyncStorage.getItem('orders');
        if (savedOrders) {
          setOrders(JSON.parse(savedOrders));
        }
      } catch (error) {
        console.error('Error loading orders:', error);
      }
    };
    
    loadOrders();
  }, []);

  useEffect(() => {
    if (route.params?.newOrder) {
      const saveOrder = async () => {
        try {
          const newOrders = [...orders, route.params.newOrder];
          await AsyncStorage.setItem('orders', JSON.stringify(newOrders));
          setOrders(newOrders);
        } catch (error) {
          console.error('Error saving order:', error);
        }
      };
      
      saveOrder();
    }
  }, [route.params?.newOrder]);

  const OrderCard = ({ order }) => (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <View>
          <Text style={styles.orderId}>Order #{order.orderId}</Text>
          <Text style={styles.orderDate}>{order.date}</Text>
        </View>
        <View style={[styles.statusContainer, { backgroundColor: '#4CAF50' }]}>
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

      <View style={styles.paymentMethod}>
        <Text style={styles.paymentText}>Via {order.paymentMethod}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order History</Text>
      </View>

      {orders.length > 0 ? (
        <ScrollView style={styles.scrollView}>
          {orders.map((order, index) => (
            <OrderCard key={`${order.orderId}-${index}`} order={order} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyStateContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.emptyStateTitle}>No Order Yet</Text>
            <Text style={styles.emptyStateSubtitle}>
              Order our Specialty Coffee now
            </Text>
            <Image
              source={require('../assets/blurBg.png')}
              style={styles.emptyStateImage}
            />
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
  orderCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    margin: 16,
    padding: 16,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
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
    paddingVertical: 4,
    borderRadius: 12,
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
    marginVertical: 8,
  },
  productName: {
    fontSize: 14,
    color: '#000000',
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
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 8,
    marginTop: 8,
  },
  totalText: {
    fontSize: 14,
    color: '#666666',
  },
  totalAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  paymentMethod: {
    marginTop: 8,
  },
  paymentText: {
    fontSize: 12,
    color: '#666666',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    elevation: 2,
    height: 100,
  },
  backButton: {
    padding: 8,
    top: 10,
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
    top: 10,
  },
  emptyStateContainer: {
    flex: 1,
    backgroundColor: "#cecdcd",
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateImage: {
    width: 300,
    height: 200,
    bottom: 130,
    left: 23
  },
  emptyStateTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
    alignItems: 'center',
    bottom: 150,
    fontWeight: "bold",

  },
  emptyStateSubtitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#757575',
    textAlign: 'center',
    marginBottom: 16,
    alignItems: 'center',
    bottom: 140
  },
});

export default OrderHistory;