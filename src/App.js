import React, { useEffect } from "react";
import Login from "./components/login.jsx";
import { reducerCases } from "./utils/Constants.js";
import { useStateProvider } from "./utils/StateProvider.jsx";
import Music from "./components/music.jsx";

export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  return <div>{token ? <Music /> : <Login />}</div>;
}
