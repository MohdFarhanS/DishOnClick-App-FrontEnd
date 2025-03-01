import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OTPInput } from "../src/data/OTPInput";
import { getUserData } from '../src/data/userStorage';

import ArrowLeftIcon from "../icons/Arrow-Left.png";

export const Verification = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [timer, setTimer] = useState(50);
  const [otpCode, setOtpCode] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [canResend, setCanResend] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const timerInterval = useRef(null);

  useEffect(() => {
    const initializeVerification = async () => {
      setLoading(true);
      try {
        await loadUserPhone();
        generateOTP();
        startTimer();
      } catch (error) {
        Alert.alert('Error', 'Failed to initialize verification');
      } finally {
        setLoading(false);
      }
    };

    initializeVerification();
    return () => {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
      }
    };
  }, []);

  const loadUserPhone = async () => {
    const userData = await getUserData();
    if (userData?.phone) {
      setUserPhone('+62' + userData.phone);
    } else {
      Alert.alert('Error', 'No phone number found');
      navigation.goBack();
    }
  };

  const generateOTP = () => {
    const newOTP = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOTP(newOTP);
    console.log('OTP generated:', newOTP);
    Alert.alert('OTP Code', `Your OTP: ${newOTP}`);
  };

  const startTimer = () => {
    setCanResend(false);
    setTimer(50);
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
    }
    timerInterval.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(timerInterval.current);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerify = async () => {
    setLoading(true);
    try {
      if (otpCode === generatedOTP) {
        navigation.replace('AppNavigator');
      } else {
        Alert.alert('Error', 'Kode OTP tidak valid');
      }
    } catch (error) {
      Alert.alert('Error', 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (canResend) {
      setResending(true);
      try {
        // Clear previous OTP
        setOtpCode('');
        
        // Generate new OTP
        generateOTP();
        
        // Restart timer
        startTimer();
        
        // Show success message
        Alert.alert(
          'Success',
          'Verification code has been resent successfully',
          [{ text: 'OK' }]
        );
      } catch (error) {
        Alert.alert(
          'Error',
          'Failed to resend verification code. Please try again.',
          [{ text: 'OK' }]
        );
      } finally {
        setResending(false);
      }
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#8B5E3C" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ArrowLeftIcon} style={styles.arrowLeftImage} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Verification</Text>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Enter OTP Code</Text>
          <Text style={styles.subtitle}>Code sent to {userPhone}</Text>
          
          <OTPInput length={4} onComplete={setOtpCode} value={otpCode} />

          <TouchableOpacity
            style={[styles.verifyButton, { opacity: otpCode.length === 4 ? 1 : 0.5 }]}
            onPress={handleVerify}
            disabled={otpCode.length !== 4 || loading}
          >
            <Text style={styles.verifyButtonText}>
              {loading ? 'Verifying...' : 'Verify'}
            </Text>
          </TouchableOpacity>

          {/* Resend Section */}
          <TouchableOpacity 
            style={styles.resendContainer}
            onPress={handleResendOTP}
            disabled={!canResend || resending}
          >
            <View style={styles.resendTextContainer}>
              <Text style={styles.resendText}>Didn't recive any code? </Text>
              {resending ? (
                <ActivityIndicator size="small" color="#8B5E3C" />
              ) : (
                <Text style={[styles.resendActionText, canResend && styles.resendActive]}>
                  {canResend ? 'Resend' : `Tunggu ${timer} detik`}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E3D5CA',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3D5CA',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    top: 25
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  arrowLeftImage: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8B5E3C',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  verifyButton: {
    backgroundColor: '#8B5E3C',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  verifyButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendContainer: {
    marginTop: 30,
    padding: 10, // Menambah padding untuk area sentuh yang lebih besar
  },
  resendTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendText: {
    fontSize: 16,
    color: '#666',
  },
  resendActionText: {
    fontSize: 16,
    color: '#666',
  },
  resendActive: {
    color: '#8B5E3C',
    fontWeight: 'bold',
  },
});

export default Verification;