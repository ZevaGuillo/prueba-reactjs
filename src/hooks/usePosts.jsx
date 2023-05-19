import { useEffect, useState } from "react";
import { getFavoritePosts } from "../lib/utils";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState(getFavoritePosts());

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPosts(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError("Error");
        setIsLoading(false);
      });
  }, []);

  const handleAddFavorite = id => {
    const postToAdd = posts.find(post => post.id === id);
    const postAlreadyInFavorites = favorites.some(post => post.id === id);
    if (!postAlreadyInFavorites) {
      setFavorites(prevFavorites => {
        const newFavorites = [...prevFavorites, postToAdd];
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return newFavorites;
      });
    } else {
      const updatedFavorites = favorites.filter(post => post.id !== id);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return {
    posts,
    isLoading,
    error,
    favorites,
    handleAddFavorite,
  };
};
