import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

const locations = [
  { id: 1, name: 'Current Location', address: 'Use your current location', icon: '📍' },
  { id: 2, name: 'Home', address: '123 Main Street, City, State', icon: '🏠' },
  { id: 3, name: 'Office', address: '456 Business Ave, City, State', icon: '🏢' },
  { id: 4, name: 'Shop', address: '789 Shopping Mall, City, State', icon: '🛒' },
  { id: 5, name: 'Use map to find address', address: 'Select location on map', icon: '🗺️' },
];

export default function SelectLocationScreen() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const router = useRouter();

  const handleLocationSelect = (locationId: number) => {
    setSelectedLocation(locationId);
    // Handle location selection
  };

  const handleConfirm = () => {
    if (selectedLocation) {
      router.replace('/login');
    }
  };

  const renderLocationItem = ({ item }: { item: typeof locations[0] }) => (
    <TouchableOpacity
      style={[
        styles.locationItem,
        selectedLocation === item.id && styles.selectedLocation,
      ]}
      onPress={() => handleLocationSelect(item.id)}
    >
      <View style={styles.locationIcon}>
        <Text style={styles.iconText}>{item.icon}</Text>
      </View>
      <View style={styles.locationDetails}>
        <Text style={styles.locationName}>{item.name}</Text>
        <Text style={styles.locationAddress}>{item.address}</Text>
      </View>
      {selectedLocation === item.id && (
        <View style={styles.checkmark}>
          <Text style={styles.checkmarkText}>✓</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.title}>Select Location</Text>
        <Text style={styles.subtitle}>
          Choose a delivery address or add a new one
        </Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={locations}
          renderItem={renderLocationItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.locationList}
        />

        <TouchableOpacity
          style={[styles.confirmButton, !selectedLocation && styles.disabledButton]}
          onPress={handleConfirm}
          disabled={!selectedLocation}
        >
          <Text style={styles.confirmButtonText}>Confirm Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
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
    lineHeight: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  locationList: {
    paddingBottom: 20,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  selectedLocation: {
    backgroundColor: '#E3F2FD',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  locationIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconText: {
    fontSize: 24,
  },
  locationDetails: {
    flex: 1,
  },
  locationName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  locationAddress: {
    fontSize: 14,
    color: '#666',
  },
  checkmark: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    opacity: 0.5,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
