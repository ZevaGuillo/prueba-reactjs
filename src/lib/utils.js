import Swal from "sweetalert2";

export const isLogin = () => {
  const user = localStorage.getItem("token");
  return user !== null && user.startsWith("Bearer");
};

export const getUser = () => {
  const user = localStorage.getItem("token");

  return user !== null? user.split('-')[1]: window.location.pathname = '/login';;
};



export const login = (username = "", password = "") => {
  if (username === "admin" && password === "admin") {
    const user = { username, password };
    localStorage.setItem("token", `Bearer-${user.username}`);
    window.location.pathname = '/post';
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Para que el usuario o la contraseña son incorrectos!",
    });
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.pathname = '/login';
};


export const getFavoritePosts = () => {
  const favoritePosts = localStorage.getItem('favorites');
  return favoritePosts ? JSON.parse(favoritePosts) : [];
};