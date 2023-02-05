import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import styled from "styled-components";
import { reducerCases } from "../utils/Constants";

export default function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map((name, id) => {
        return { name, id };
      });

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);
  const changeCurrentPlaylist = (selectedPlaylistId) => {
    console.log(selectedPlaylistId);
    dispatch({
      type: reducerCases.SET_PLAYLIST_ID,
      selectedPlaylistId,
    });
  };
  return (
    <Container>
      <ul>
        {playlists.map((playlists) => {
          return (
            <li
              key={playlists.id}
              onClick={() => changeCurrentPlaylist(playlists.name.id)}
            >
              {playlists.name.name}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  font-size: 2vh;
  font-weight: 500;
  margin: 0 1rem;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 51vh;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 3px;
      &-thumb {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 30px;
      }
      &-track {
        display: none;
        border-radius: 30px;
      }
    }
    li {
      display: flex;
      gap: 1rem;
      cursor: pointer;
      transition: 0.3 ease-in-out;
      &:hover {
        color: wheat;
      }
    }
  }
`;
