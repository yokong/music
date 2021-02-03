import * as actionTypes from "./constants";
import { getTopBanners, getHotRecommends } from "@/services/recommend";
import { getNewAlbums } from "@/services/recommend";
import { getTopList } from "../../../../../services/recommend";

// 更新操作
const changeTopBannerAction = (res) => {
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners,
  };
};

// const changeTopBannerAction = (res) =>{
//   return {
//     type: actionTypes
//   }
// }

const changeHotRecommendAction = (res) => {
  return {
    type: actionTypes.CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result,
  };
};

const changeNewAlbumAction = (res) => {
  return {
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.albums,
  };
};

const changeUpRankingAction = (res) => {
  return {
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist,
  };
};

const changeNewRankingAaction = (res) => {
  return {
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist,
  };
};

const changeOriginRankingAction = (res) => {
  return {
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist,
  };
};

// 异步操作
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res));
          break;
        case 2:
          dispatch(changeNewRankingAaction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  };
};
