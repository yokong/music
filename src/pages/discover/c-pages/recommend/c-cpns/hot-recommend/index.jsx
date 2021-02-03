import React, { memo, useEffect } from "react";
import { HotRecommendWrapper } from "./style";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getHotRecommendAction } from "../../store/actionCreators";
import HYSongsCover from "@/components/songs-cover";
import { HOT_RECOMMEND_LIMIT } from "@/common/contants";
export default memo(function HYHotRecommend() {
  // state

  // redux hooks
  const { hotRecommends } = useSelector((state) => {
    return {
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <div>
      <HotRecommendWrapper>
        <HYThemeHeaderRCM
          title="热门推荐"
          keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
        ></HYThemeHeaderRCM>
        <div className="recommend-list">
          {hotRecommends.map((item, index) => {
            return (
              <HYSongsCover key={item.id} info={item}>
                {item.name}
              </HYSongsCover>
            );
          })}
        </div>
      </HotRecommendWrapper>
    </div>
  );
});
