import { Link } from "react-router-dom";
import styled from "styled-components";

const TitleBar = styled.header`
  padding: 3rem;
  color: #141414;
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
