import React from "react";
import styled from "styled-components";
import logo from "../assets/logo1.jpg";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlists from "./Playlists";

export default function Sidebar() {
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="logo"
          />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <hr></hr>
      <Playlists />
    </Container>
  );
}

const Container = styled.div`
  background-color: #191726;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  // font-family: "Comic Sans MS", sans-serif;
  font-size: 2.5vh;
  font-weight: bold;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 3vh 1rem;
      margin-bottom: 4vh;
      display: flex;
      flex-direction: row;
      align-items: center;
      // padding: 0 1rem;
      // justify-content: center;
      img {
        max-inline-size: 65%;
        block-size: auto;
      }
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3 ease-in-out;
        &:hover {
          color: wheat;
        }
        svg {
          font-size: 3.5vh;
        }
      }
    }
  }
  hr {
    width: 90%;
    align-self: center;
    margin: 1.5rem 0;
    border: 1px solid grey;
    opacity: 0.2;
  }
`;
