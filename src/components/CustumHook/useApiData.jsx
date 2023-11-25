import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiData = (url) => {
  const [products, setProducts] = useState(null);
  const [sliders, setSliders] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/React_Shopify/db.json');
        setProducts(response.data.products);
        setSliders(response.data.slider);
        setCategories(response.data.categories);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    
  }, [url]);

  return { products,sliders,categories, loading, error};
};

export default useApiData;
