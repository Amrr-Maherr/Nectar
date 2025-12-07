import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

export default function NumberVerificationScreen() {
  const [otp, setOtp] = useState('');
  const [resendTimer, setResendTimer] = useState(30);
  const router = useRouter();

  const handleVerify = () => {
    if (otp.length !== 6) {
      Alert.alert('Error', 'Please enter the complete verification code');
      return;
    }
    // Handle verification logic
    router.replace('/selectLocation');
  };

  const handleResend = () => {
    if (resendTimer === 0) {
      setResendTimer(30);
      // Handle resend OTP logic
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subtitle}>
          We have sent a verification code to your phone number
        </Text>
        <Text style={styles.phoneText}>+1 (555) 123-4567</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.otpContainer}>
          <Text style={styles.otpLabel}>Enter 6-digit code</Text>
          <TextInput
            style={styles.otpInput}
            placeholder="000000"
            value={otp.replace(/\D/g, '')}
            onChangeText={(value) => setOtp(value.replace(/\D/g, '').slice(0, 6))}
            keyboardType="numeric"
            maxLength={6}
            textAlign="center"
          />
        </View>

        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive the code?</Text>
          <TouchableOpacity
            onPress={handleResend}
            disabled={resendTimer > 0}
          >
            <Text
              style={[
                styles.resendLink,
                resendTimer > 0 && styles.disabledResendLink,
              ]}
            >
              Resend in {resendTimer}s
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.changeNumber}>
          <Text style={styles.changeNumberText}>Change phone number</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 80,
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 10,
  },
  phoneText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  form: {
    flex: 1,
  },
  otpContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  otpLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  otpInput: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    paddingVertical: 15,
    width: 200,
    letterSpacing: 10,
  },
  verifyButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resendText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  resendLink: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledResendLink: {
    color: '#AAA',
  },
  changeNumber: {
    alignItems: 'center',
  },
  changeNumberText: {
    color: '#007AFF',
    fontSize: 16,
  },
});
