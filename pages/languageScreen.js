import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const LanguageScreen = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState('english'); // Default language

  const languages = [
    { id: 'indonesia', label: 'Bahasa Indonesia' },
    { id: 'english', label: 'English' },
  ];

  const handleLanguageSelect = (languageId) => {
    setSelectedLanguage(languageId);
    // Tambahkan logika untuk menyimpan bahasa yang dipilih
    // misalnya menggunakan AsyncStorage
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="black" />
          <Text style={styles.headerTitle}>Bahasa</Text>
        </TouchableOpacity>
      </View>

      {/* Language Options */}
      <View style={styles.content}>
        {languages.map((language) => (
          <TouchableOpacity
            key={language.id}
            style={styles.languageButton}
            onPress={() => handleLanguageSelect(language.id)}
          >
            <Text style={styles.languageText}>{language.label}</Text>
            {selectedLanguage === language.id && (
              <Icon name="checkmark" size={24} color="white" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
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
    top: 10
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    padding: 16,
    gap: 12,
  },
  languageButton: {
    backgroundColor: '#8B5E3C',
    padding: 16,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  languageText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default LanguageScreen;