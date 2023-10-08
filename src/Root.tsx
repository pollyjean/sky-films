import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import styled, { createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { backgroundState } from "./utilities/atom";

const GlobalStyle = createGlobalStyle`
  body {
    color: #dfe6e9;
    font-family: 'Exo 2', sans-serif;
  }
`;

const PageContainer = styled.div`
  width: 100%;
  margin: 0;
  height: auto;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BackdropLayer = styled.div`
  position: fixed;
  z-index: 1;
  width: 300%;
  height: 300%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  background-image: url(/noisy.jpg);
  background-size: 100px;
  background-repeat: repeat;
  opacity: 0.4;
`;

const S = { PageContainer, BackdropLayer };

const Root = () => {
  const backgroundImage = useRecoilValue(backgroundState);
  return (
    <>
      <GlobalStyle />
      <S.PageContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
        <S.BackdropLayer />
        <Header />
        <Outlet />
      </S.PageContainer>
    </>
  );
};

export default Root;
