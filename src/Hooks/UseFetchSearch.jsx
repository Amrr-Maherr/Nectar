import { useEffect, useState } from "react";
import axios from "axios";

export default function UseFetchSearch(query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(
          `https://dummyjson.com/recipes/search?q=${query}`
        );
        setData(res.data.recipes);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
}
