import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Header } from "@/components";
import { backgroundState } from "@/utilities";
import { PageContainer, BackdropLayer, GlobalStyle } from "@/styles";

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
