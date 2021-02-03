import React, { memo } from "react";
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
import HYTopBanner from "./c-cpns/top-banner";
import HYHotRecommend from './c-cpns/hot-recommend'
import HYRecommendRanking from './c-cpns/recommend-ranking'
import HYNewAlbum from './c-cpns/new-album'
function HYRecommend(props) {
  return (
    <RecommendWrapper >
      <HYTopBanner></HYTopBanner>
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HYHotRecommend></HYHotRecommend>
          <HYNewAlbum></HYNewAlbum>
          <HYRecommendRanking></HYRecommendRanking>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(HYRecommend);

// function HYRecommend(props) {
//   const { getBanners, topBanners } = props;
//   console.log(getBanners);
//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);
//   return (
//     <div>
//       <h2>HYRecommend {topBanners.length}</h2>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     topBanners: state.recommend.topBanners,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getBanners: () => {
//       dispatch(getTopBannerAction());
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
