import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { PostPage } from "../pages/PostPage";
import { PostDestacadosPage } from "../pages/PostDestacadosPage";
import { isLogin } from "../lib/utils";
import { Navbar } from "../components/Navbar";
export const AppRouter = () => {
  const logged = isLogin();

  return (
    <>
    {logged && <Navbar/>}
      <Routes>
        {logged ? (
          <>
            <Route
              path="/post"
              element={<PostPage />}
            />

            <Route
              path="/post/destacados"
              element={<PostDestacadosPage />}
            />

            <Route
              path="/*"
              element={<Navigate to="/post" />}
            />
          </>
        ) : (
          <>
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/*"
              element={<Navigate to="/login" />}
            />
          </>
        )}
      </Routes>
    </>
  );
};
