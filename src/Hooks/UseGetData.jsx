import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function UseGetData() {
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  const [Recipes, setRecipes] = useState([]);

  const GetData = async () => {
    try {
      setLoading(true);

      const existingData = await AsyncStorage.getItem("Recipes");

      const parsedData = existingData ? JSON.parse(existingData) : [];

      setRecipes(parsedData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return { Loading, Error, Recipes};
}
