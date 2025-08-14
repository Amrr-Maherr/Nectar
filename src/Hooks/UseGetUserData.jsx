import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

export default function UseGetUserData() {
    const [Data, setData] = useState({})
    const [Error,setError] = useState(null)
    const [Loading,setLoading] = useState(true)
    const FetchData = async () => {
        try {
            setLoading(true)
            const Value = await AsyncStorage.getItem("UserData");
            if (Value) {
                setData(JSON.parse(Value))
                console.log(Value);
            }
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
      FetchData();
    }, []);
    return {Data,Error,Loading}
}
