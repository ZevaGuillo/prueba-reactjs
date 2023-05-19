import React, { useEffect, useState } from "react";
import { getUser, logout } from "../lib/utils";
import { Link } from "react-router-dom";
import { Badge, IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
export const Navbar = () => {
  const [usename, setUsename] = useState(getUser());


  const [valueFav, setValueFav] = useState(JSON.parse(localStorage.getItem('favorites')).length || 0);

  useEffect(() => {
    const handleStorageChange = (event) => {
      console.log('me ejecuto');
      if (event.key === 'favorites') {
        setValueFav(event.newValue.length);
      }

    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  return (
    <nav className="z-20 fixed w-screen h-14 px-10 lg:px-20 flex items-center justify-between bg-slate-50 shadow-md">
      <Link
        to={"/post"}
        className="space-x-4 flex items-center">
        <span className="font-semibold text-xl hover:text-slate-500">
          {usename}
        </span>
        <Tooltip title="Logout">
          <IconButton onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Link>
      <Link to={"/post/destacados"}>
        <Badge
          badgeContent={valueFav}
          color="secondary"
          className="bg-slate-300 px-4 py-1 rounded-full text-slate-800">
          Destacados
        </Badge>
      </Link>
    </nav>
  );
};
