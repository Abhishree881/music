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
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  // font-family: "Comic Sans MS", sans-serif;
  font-size: 2vh;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 2vh 1vh;
      // display: flex;
      // flex-direction: row;
      // align-items: center;
      // justify-content: center;
      // font-size: 2.5vh;
      img {
        max-inline-size: 80%;
        // margin-right: 1vh;
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
          color: white;
        }
      }
    }
  }
  hr {
    width: 80%;
    border: 1px solid grey;
  }
`;
