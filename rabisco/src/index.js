import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import MyPokemons from "./components/MyPokemons";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonList></PokemonList>
  },
  {
    path: "/:name",
    element: <PokemonDetails />
  },
  {
    path: "/my-pokemons",
    element: <MyPokemons></MyPokemons>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
