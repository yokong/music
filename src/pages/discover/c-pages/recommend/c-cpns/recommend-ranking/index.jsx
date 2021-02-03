import React, { memo, useEffect } from "react";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import HYTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTopListAction } from "../../store/actionCreators";

export default memo(function HYRecommendRanking() {
  // redux hox
  const dispath = useDispatch();
  const { upRanking, newRanking, originRanking } = useSelector((state) => {
    return {
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    };
  }, shallowEqual);

  // other hooks
  useEffect(() => {
    dispath(getTopListAction(0));
    dispath(getTopListAction(2));
    dispath(getTopListAction(3));
  }, [dispath]);
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单"></HYThemeHeaderRCM>
      <div className="tops">
        <HYTopRanking info={upRanking}></HYTopRanking>
        <HYTopRanking info={newRanking}></HYTopRanking>
        <HYTopRanking info={originRanking}></HYTopRanking>
      </div>
    </RankingWrapper>
  );
});
