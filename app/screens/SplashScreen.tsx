import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={{alignItems:"center",justifyContent:"center"}}>
          <Text style={styles.title}>Nectar</Text>
          <Text style={styles.subtitle}>Powered by TheMealDB</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#53B175",
  },
  logoContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap:18
  },
  logo: {
    width: 54.7,
    height: 63.61,
  },
  title: {
    fontSize: 52,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});
