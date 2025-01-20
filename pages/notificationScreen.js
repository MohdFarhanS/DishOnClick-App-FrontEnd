import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();

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
        <Text style={styles.headerTitle}>Notification</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Add your notification content here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    top: 5,
    height: 100,
  },
  backButton: {
    padding: 8,
    top: 10
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
    top: 10,
  },
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: "#cecdcd",
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
    color: '#763809',
    fontFamily: 'Montserrat-Regular',
  },
});

export default Notification;