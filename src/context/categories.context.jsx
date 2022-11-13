import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories:{},
});

export const CategoriesProvider = ({ children}) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();
      setCategories(categories);
    }
    getCategoriesMap();
  }, []);

  const value = {categories, setCategories};

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
} 