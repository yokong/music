import HYDiscover from "@/pages/discover";
import React from "react";

import HYMine from "@/pages/mine";
import HYFriend from "@/pages/friend";
import HYRecommend from '../pages/discover/c-pages/recommend'
import HYRanking from '../pages/discover/c-pages/ranking'
import HYSongs from '../pages/discover/c-pages/songs'
import HYArtist from '../pages/discover/c-pages/artist'
import HYDjradio from '../pages/discover/c-pages/djradio'
import HYAlbum from '../pages/discover/c-pages/album'
import { Redirect } from "react-router-dom";



const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: HYRecommend,
      },
      {
        path: "/discover/ranking",
        component: HYRanking,
      },
      {
        path: "/discover/songs",
        component: HYSongs,
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: HYDjradio,
      },
      {
        path: "/discover/artist",
        component: HYArtist,
      },
      {
        path: "/discover/album",
        component: HYAlbum,
      },
    
    ],
  },
  {
    path: "/mine",
    component: HYMine,
  },
  {
    path: "/friend",
    component: HYFriend,
  },
];

export default routes;
