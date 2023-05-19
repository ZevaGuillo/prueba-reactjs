import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { login } from "../lib/utils";

export const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    login(usuario, password);
  };

  return (
    <main className="min-h-screen w-screen flex justify-center items-center">
      <section className="flex flex-col w-3/4 bg-slate-50 p-4 rounded-md shadow-xl lg:w-2/6">
        <h1 className="text-3xl py-4">Iniciar</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <TextField
            className="w-full"
            label="Usuario"
            variant="standard"
            required
            onChange={e => setUsuario(e.target.value)}
            value={usuario}
          />
          <TextField
            label="Contraseña"
            variant="standard"
            type="password"
            required
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <Button type="sub" variant="contained">Iniciar</Button>
        </form>
      </section>
    </main>
  );
};
