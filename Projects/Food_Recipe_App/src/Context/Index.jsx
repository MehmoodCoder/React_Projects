import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({
  searchParam: "",
  loading: false,
  recipeList: [],
  setSearchParam: () => {},
  handleSubmit: () => {},
  recipeDetailsData: null,
  setRecipeDetailsData: () => {},
  handleAddToFavorite: () => {},
  favoritesList: [],
});

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      return JSON.parse(localStorage.getItem("recipe-favorites") || "[]");
    } catch {
      return [];
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("recipe-favorites", JSON.stringify(favoritesList));
    }
  }, [favoritesList]);

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedSearch = searchParam.trim();
    if (!trimmedSearch) {
      return;
    }

    setLoading(true);
    setRecipeList([]);

    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${trimmedSearch}`
      );
      const data = await res.json();

      if (data?.data?.recipes?.length) {
        setRecipeList(data.data.recipes);
        setSearchParam("");
        navigate("/");
      } else {
        setRecipeList([]);
        setSearchParam("");
      }
    } catch (e) {
      console.error(e);
      setRecipeList([]);
      setSearchParam("");
    } finally {
      setLoading(false);
    }
  }

  function handleAddToFavorite(getCurrentItem) {
    setFavoritesList((currentList) => {
      const exists = currentList.some((item) => item.id === getCurrentItem.id);

      if (exists) {
        return currentList.filter((item) => item.id !== getCurrentItem.id);
      }

      return [...currentList, getCurrentItem];
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}