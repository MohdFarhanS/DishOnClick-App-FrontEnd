import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();

  const handleContact = (type) => {
    switch (type) {
      case 'email':
        Linking.openURL('mailto:dishonclick@gmail.com');
        break;
      case 'phone':
        Linking.openURL('tel:+6281277777070');
        break;
      case 'location':
        Linking.openURL('https://maps.google.com/?q=Jl. Marpoyan Damai No. 777, Pekanbaru');
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="black" />
          <Text style={styles.headerTitle}>Tentang Aplikasi</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../icons/logo.png')} // Sesuaikan path dengan struktur proyek Anda
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>DISHONCLICK</Text>
          <Text style={styles.subLogoText}>Coffee & Roastery</Text>
          <Text style={styles.versionText}>Versi 1.0.0</Text>
        </View>

        {/* About Us Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tentang Kami</Text>
          <Text style={styles.descriptionText}>
            DISHONCLICK Adalah aplikasi resmi dari toko kami yang dirancang untuk
            memudahkan Anda dalam memilih menu favorit dan melakukan pembayaran secara
            praktis. Dengan layanan yang cepat, aman, dan efisien, kami berkomitmen
            memberikan pengalaman terbaik agar setiap kunjungan Anda lebih nyaman dan
            menyenangkan.
          </Text>
        </View>

        {/* Main Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fitur Utama</Text>
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <Icon name="cafe-outline" size={24} color="#8B4513" />
              <Text style={styles.featureText}>Pilihan Kopi Premium</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="cart-outline" size={24} color="#8B4513" />
              <Text style={styles.featureText}>Pemesanan Mudah</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="pricetag-outline" size={24} color="#8B4513" />
              <Text style={styles.featureText}>Nikmati Voucher Discount</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="notifications-outline" size={24} color="#8B4513" />
              <Text style={styles.featureText}>Notifikasi Promo Spesial</Text>
            </View>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hubungi Kami</Text>
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => handleContact('email')}
          >
            <Icon name="mail-outline" size={24} color="#8B4513" />
            <Text style={styles.contactText}>dishonclick@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => handleContact('phone')}
          >
            <Icon name="call-outline" size={24} color="#8B4513" />
            <Text style={styles.contactText}>+62 812-7777-7070</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => handleContact('location')}
          >
            <Icon name="location-outline" size={24} color="#8B4513" />
            <Text style={styles.contactText}>Jl. Marpoyan Damai No. 777, Pekanbaru</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E6D8',
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
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  scrollView: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    bottom: 30
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4513',
    marginTop: 10,
  },
  subLogoText: {
    fontSize: 16,
    color: '#8B4513',
    marginTop: 5,
  },
  versionText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  section: {
    padding: 20,
    bottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 15,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    textAlign: 'justify',
  },
  featureList: {
    gap: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
  },
});

export default AboutScreen;