import React, { createContext, useState, useEffect , useCallback} from "react";
import api from "../api/productAPI";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const data = await api.categories();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <CategoriesContext.Provider value={{ categories, fetchCategories, loading, error }}>
      {children}
    </CategoriesContext.Provider>
  );
};