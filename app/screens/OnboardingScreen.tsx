import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ImageBackground, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';




export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("../../assets/images/onbording.png")}
      >
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Image style={{width:48.47,height:56.36}} source={require("../../assets/images/logo.png")}/>
            <Text style={styles.title}>Welcome to nectar</Text>
            <Text style={styles.subtitle}>
              Get your groceries in as fast as one hour
            </Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 90,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 19,
  },
  subtitle: {
    fontSize: 16,
    color: "#FCFCFC",
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#53B175",
    paddingVertical: 24,
    paddingHorizontal: 40,
    borderRadius: 19,
    marginTop: 40,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});