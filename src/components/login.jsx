import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg";

export default function login() {
  const handleClick = () => {
    const clientId = "ebc0c0e4e5c346dab34b71bc4aa23d6b";
    const redirecyUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scopes = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirecyUrl}&scope=${scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img src={logo} alt="App Logo" />
      <button onClick={handleClick}>Login with Spotify</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15vh 15vw;
  height: 70vh;
  width: 70vw;
  border-radius: 2rem;
  background-color: #fff852;
  gap: 0rem;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  img {
    height: 30vh;
    // width: 40vw;
  }
  button {
    padding: 3vh 5vw;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #fff852;
    font-size: 2.4vh;
    cursor: pointer;
  }
  button:hover {
    // padding: 3.5vh 5.5vw;
    background-color: #131313;
  }
`;
