import axios from "axios";
import {useEffect, useState } from "react"

export default function UseFetchData() {
    const [Data,setData] = useState([])
    const [Loading,setLoading] = useState(false);
    const [Error, setError] = useState(null)
    const GetData = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://dummyjson.com/recipes");
            setData(response.data.recipes);
            setLoading(false)
        }catch(error){
            console.log(error);
            setError(error)
        }
    }
    useEffect(() => {
        GetData()
    },[])
    return {Data,Error,Loading}
}