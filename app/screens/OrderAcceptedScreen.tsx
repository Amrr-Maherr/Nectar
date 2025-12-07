import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function OrderAcceptedScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.content}>
        <View style={styles.checkmarkContainer}>
          <View style={styles.checkmarkCircle}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Order Accepted!</Text>
          <Text style={styles.subtitle}>
            Your order has been placed successfully.{'\n'}
            You will receive a confirmation email shortly.
          </Text>
        </View>

        <View style={styles.orderInfo}>
          <View style={styles.orderItem}>
            <Text style={styles.orderLabel}>Order Number</Text>
            <Text style={styles.orderValue}>#12345</Text>
          </View>

          <View style={styles.orderItem}>
            <Text style={styles.orderLabel}>Estimated Delivery</Text>
            <Text style={styles.orderValue}>25-30 min</Text>
          </View>

          <View style={styles.orderItem}>
            <Text style={styles.orderLabel}>Delivery Address</Text>
            <Text style={styles.orderValue}>123 Main Street{'\n'}City, State 12345</Text>
          </View>
        </View>

        <View style={styles.trackOrder}>
          <TouchableOpacity style={styles.trackButton}>
            <Text style={styles.trackButtonText}>Track My Order</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backHomeButton}>
            <Text style={styles.backHomeButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.support}>
          <Text style={styles.supportText}>
            Need help? Contact our support team
          </Text>
          <TouchableOpacity style={styles.supportButton}>
            <Text style={styles.supportButtonText}>Get Support</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  checkmarkContainer: {
    marginBottom: 40,
  },
  checkmarkCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  checkmark: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  orderInfo: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  orderLabel: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  orderValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
    textAlign: 'right',
  },
  trackOrder: {
    width: '100%',
    marginBottom: 40,
  },
  trackButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backHomeButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  backHomeButtonText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  support: {
    alignItems: 'center',
  },
  supportText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  supportButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  supportButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
