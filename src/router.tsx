import { createBrowserRouter } from "react-router-dom";
import Root from "@/Root";
import { ComingSoon, ErrorPage, NowPlaying, Popular } from "@/routers";
import { MoviePaths } from "./utilities";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: MoviePaths.popular,
        element: <Popular />,
      },
      {
        path: MoviePaths.comingSoon,
        element: <ComingSoon />,
      },
      {
        path: MoviePaths.nowPlaying,
        element: <NowPlaying />,
      },
    ],
  },
]);
