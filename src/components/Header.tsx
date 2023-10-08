import { Link, useLocation } from "react-router-dom";
import { Menu, TitleBar, Marker } from "@/styles";
import { MoviePaths } from "@/utilities";
import { motion } from "framer-motion";

const S = { Menu, TitleBar, Marker };

const MarkerSwitch = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Spring = {
  type: "spring",
  stiffness: 700,
  damping: 40,
};

const M = { MarkerSwitch, Spring };

const Header = () => {
  const { pathname } = useLocation();
  return (
    <S.TitleBar>
      <S.Menu>
        <li>
          <Link to={MoviePaths.popular}>Popular</Link>
          {pathname === MoviePaths.popular && <S.Marker as={motion.span} layoutId="marker" transition={M.Spring} />}
        </li>
        <li>
          <Link to={`${MoviePaths.comingSoon}`}>Coming Soon</Link>
          {pathname === "/" + MoviePaths.comingSoon && (
            <S.Marker as={motion.span} layoutId="marker" transition={M.Spring} />
          )}
        </li>
        <li>
          <Link to={`${MoviePaths.nowPlaying}`}>Now Playing</Link>
          {pathname === "/" + MoviePaths.nowPlaying && (
            <S.Marker as={motion.span} layoutId="marker" transition={M.Spring} />
          )}
        </li>
      </S.Menu>
    </S.TitleBar>
  );
};

export default Header;
