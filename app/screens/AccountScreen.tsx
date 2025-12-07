import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const accountOptions = [
  {
    id: 1,
    title: 'Personal Information',
    subtitle: 'Update your profile details',
    icon: '👤',
  },
  {
    id: 2,
    title: 'Payment Methods',
    subtitle: 'Add or manage payment cards',
    icon: '💳',
  },
  {
    id: 3,
    title: 'Delivery Addresses',
    subtitle: 'Manage your saved addresses',
    icon: '📍',
  },
  {
    id: 4,
    title: 'Order History',
    subtitle: 'View your past orders',
    icon: '📦',
  },
  {
    id: 5,
    title: 'Notifications',
    subtitle: 'Manage notification preferences',
    icon: '🔔',
  },
  {
    id: 6,
    title: 'Help & Support',
    subtitle: 'Get help or contact support',
    icon: '❓',
  },
  {
    id: 7,
    title: 'Privacy Policy',
    subtitle: 'Read our privacy terms',
    icon: '🔒',
  },
  {
    id: 8,
    title: 'Log Out',
    subtitle: 'Sign out of your account',
    icon: '🚪',
  },
];

export default function AccountScreen() {
  const handleOptionPress = (optionId: number) => {
    if (optionId === 8) {
      Alert.alert(
        'Log Out',
        'Are you sure you want to log out?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Log Out',
            style: 'destructive',
            onPress: () => {
              // Handle logout
            },
          },
        ]
      );
    } else {
      // Navigate to respective screen
    }
  };

  const renderOptionItem = ({ item }: { item: typeof accountOptions[0] }) => (
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => handleOptionPress(item.id)}
    >
      <View style={styles.optionIcon}>
        <Text style={styles.iconText}>{item.icon}</Text>
      </View>
      <View style={styles.optionDetails}>
        <Text style={styles.optionTitle}>{item.title}</Text>
        <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
      </View>
      <View style={styles.optionArrow}>
        <Text style={styles.arrowText}>›</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.title}>My Account</Text>
        <Text style={styles.subtitle}>Manage your account settings</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>john.doe@email.com</Text>
          <Text style={styles.phone}>+1 (555) 123-4567</Text>
        </View>
      </View>

      <ScrollView
        style={styles.optionsContainer}
        showsVerticalScrollIndicator={false}
      >
        {accountOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.optionItem}
            onPress={() => handleOptionPress(option.id)}
          >
            <View style={styles.optionIcon}>
              <Text style={styles.iconText}>{option.icon}</Text>
            </View>
            <View style={styles.optionDetails}>
              <Text
                style={[
                  styles.optionTitle,
                  option.id === 8 && styles.logoutTitle,
                ]}
              >
                {option.title}
              </Text>
              <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
            </View>
            <View style={styles.optionArrow}>
              <Text style={styles.arrowText}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  phone: {
    fontSize: 14,
    color: '#666',
  },
  optionsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconText: {
    fontSize: 20,
  },
  optionDetails: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 2,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  optionArrow: {
    paddingLeft: 15,
  },
  arrowText: {
    fontSize: 20,
    color: '#CCC',
  },
  logoutTitle: {
    color: '#FF3B30',
  },
});
