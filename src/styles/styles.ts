import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: #dfe6e9;
    font-family: 'Exo 2', sans-serif;
    background-color: #2d3436;
  }
`;

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  height: auto;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BackdropLayer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.9) 100%),
    url(/noisy.png);
  background-size: 100%, 30%;
  background-repeat: repeat;
  backdrop-filter: blur(8px);
  opacity: 1;
`;

export const List = styled.ul`
  position: relative;
  z-index: 2;
  list-style: none;
  display: flex;
  gap: 3rem 2rem;
  flex-wrap: wrap;
  max-width: 60rem;
  padding: 8rem 0.25rem;
  transition: 1s all ease-in-out;
  @media (max-width: 65rem) {
    display: grid;
    grid-template-columns: 4fr 4fr 4fr 4fr;
  }
  @media (max-width: 55rem) {
    grid-template-columns: 3fr 3fr 3fr;
  }
  @media (max-width: 40rem) {
    grid-template-columns: 2fr 2fr;
    gap: 0.25rem 0.25rem;
    padding: 10rem 0;
  }
`;

export const MovieItem = styled.li`
  position: relative;
  width: 10rem;
  height: 15rem;
`;

export const CardLink = styled(Link)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  width: 10rem;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 4;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  &:hover figcaption {
    display: flex;
  }
`;

export const Caption = styled.figcaption`
  position: absolute;
  z-index: 2;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  width: 100%;
  padding-bottom: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1;
  opacity: 1;
  text-transform: uppercase;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 20%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const RatingStar = styled.strong`
  margin-top: 0.25rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HalfStar = styled.span`
  display: inline-block;
  width: 0.45rem;
  overflow: hidden;
`;

export const DetailModal = styled.section`
  position: absolute;
  margin: 0 auto;
  max-width: 40rem;
  min-height: 30rem;
  background-color: #141414;
  box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.4);
  color: #fefefe;
  background-position: top center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-height: 50rem) {
    position: relative;
    min-height: auto;
    max-height: 90vh;
    overflow: auto;
    width: 95%;
  }
`;

export const Details = styled.div`
  padding: 20rem 2rem 2rem;
  h3 {
    font-size: 3rem;
    line-height: 1.2;
  }
  p {
    letter-spacing: 1px;
  }
  ul {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    li {
      display: inline-flex;
      border-radius: 0.5rem;
      padding: 0.25rem 0.5rem;
      line-height: 1;
      list-style: none;
      background-color: #dfe6e9;
      color: #2d3436;
    }
  }
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 1s ease-in-out;
`;

export const TitleBar = styled.header`
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: center;
  font-family: "Teko", sans-serif;
  text-transform: uppercase;
  padding: 1rem;
  color: rgba(253, 203, 110, 1);
  backdrop-filter: blur(10px);
  width: 100%;
  font-size: 3rem;
`;

export const Menu = styled.menu`
  list-style: none;
  display: flex;
  gap: 1rem;
  li {
    position: relative;
    padding: 0.5rem 2rem;
  }
  a {
    display: block;
    line-height: 1;
  }
  transition: 1s all ease-in-out;
  @media (max-width: 55rem) {
    font-size: 2rem;
    gap: 0.5rem;
  }
  @media (max-width: 40rem) {
    font-size: 1.5rem;
    gap: 0.25rem;
  }
  @media (max-width: 35rem) {
    font-size: 1rem;
    gap: 0;
  }
  @media (max-width: 30rem) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Marker = styled.span`
  position: absolute;
  display: inline-flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
`;
