import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = ({ url, isSort = false }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}${url}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseData = response.data;

        if (isSort) {
          responseData.sort((a, b) => {
            return b.id - a.id;
          });
        }

        setData(responseData);
      } catch (error) {
        console.error(error);
        setError(
          error.response?.data?.message ||
            error.message ||
            "Error fetching data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
