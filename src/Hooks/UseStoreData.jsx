import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function UseStoreData() {
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  const StoreData = async (recipe) => {
    try {
      setLoading(true);

      const existingData = await AsyncStorage.getItem("Recipes");

      let recipes = existingData ? JSON.parse(existingData) : [];

      recipes.push(recipe);

      await AsyncStorage.setItem("Recipes", JSON.stringify(recipes));

      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  return { Loading, Error, StoreData };
}
