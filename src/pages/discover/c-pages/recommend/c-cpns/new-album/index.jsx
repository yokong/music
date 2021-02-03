import React, { memo, useEffect, useRef } from "react";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HYAlbumCover from '@/components/album-cover';
import { Carousel } from "antd";
import { getNewAlbumAction } from "../../store/actionCreators";
import { AlbumWrapper } from "./styled";
export default memo(function HYNewBAlbum() {
  // redux hooks
  const { newAlbums } = useSelector((state) => {
    return {
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, []);

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架"></HYThemeHeaderRCM>
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <HYAlbumCover
                        key={iten.id}
                        info={iten}
                        size={100}
                        width={118}
                        bgp="-570px"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});
