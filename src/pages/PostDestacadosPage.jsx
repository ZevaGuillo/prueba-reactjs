import { useState } from "react";
import { getFavoritePosts } from "../lib/utils";
import DeleteIcon from "@mui/icons-material/Delete";

export const PostDestacadosPage = () => {
  const [favorites, setFavorites] = useState(getFavoritePosts());

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((post) => post.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <main className="min-h-screen w-screen pt-20 px-10 lg:px-20">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {favorites.map(favorite => (
          <div
            key={favorite.id}
            className="p-4 rounded-md bg-slate-50 shadow-sm
       relative">
            <p className="text-sm text-slate-500">#{favorite.id}</p>
            <h2 className="font-semibold text-lg">{favorite.title}</h2>
            <p className="text-gray-600">{favorite.body}</p>
            <div
              className={`absolute top-2 right-2 text-slate-400`}
              onClick={() => handleRemoveFavorite(favorite.id)}>
              <DeleteIcon />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
