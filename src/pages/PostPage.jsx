import { CircularProgress } from "@mui/material";
import { usePosts } from "../hooks/usePosts";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Swal from "sweetalert2";

export const PostPage = () => {
  const { posts, favorites, handleAddFavorite, isLoading, error} = usePosts();

  if(error){
    Swal.fire({
      icon: "error",
      title: "Oops...",
    });
  }

  if(isLoading) {
    return <div className="min-h-screen w-screen pt-20 px-10 lg:px-20 grid place-content-center"><CircularProgress/></div>
  }

  return (
    <main className="min-h-screen w-screen pt-20 px-10 lg:px-20">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div key={post.id} className="p-4 rounded-md bg-slate-50 shadow-sm
           relative">
            <p className="text-sm text-slate-500">#{post.id}</p>
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
            <div className={`absolute top-2 right-2 ${favorites.map(fav => fav.id).includes(post.id)?'text-red-400':'text-slate-400'}`} onClick={()=>handleAddFavorite(post.id)}>
              <FavoriteIcon/>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
