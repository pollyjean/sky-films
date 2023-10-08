import { Link } from "react-router-dom";
import styled from "styled-components";

const TitleBar = styled.header`
  position: relative;
  z-index: 2;
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

const Menu = styled.menu`
  list-style: none;
  display: flex;
  gap: 3rem;
`;

const S = { Menu, TitleBar };

const Header = () => {
  return (
    <S.TitleBar>
      <S.Menu>
        <li>
          <Link to="/">Popular</Link>
        </li>
        <li>
          <Link to="/coming-soon">Coming Soon</Link>
        </li>
        <li>
          <Link to="/now-playing">Now Playing</Link>
        </li>
      </S.Menu>
    </S.TitleBar>
  );
};

export default Header;
