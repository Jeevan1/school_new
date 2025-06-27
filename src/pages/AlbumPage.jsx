import Layout from "../components/Layout/Layout";
import AlbumSingle from "../components/AlbumSingle/AlbumSingle";

import PageBanner from "../components/PageBanner/PageBanner";
import VideoSingle from "../components/AlbumSingle/VideoSingle";
import { useState } from "react";

const AlbumPage = () => {
  const [activeItem, setActiveItem] = useState("images");
  return (
    <Layout>
      <PageBanner pageTitle={"Gallery"} page={"Album"} />
      <div className="">
        <div className="container">
          <div className="d-flex gap-3 section__gap pb-4 border-bottom">
            <button
              className={`btn btn__2 py-2 ${
                activeItem === "images" ? "active_gallery_btn" : ""
              }`}
              onClick={() => setActiveItem("images")}
            >
              Images
            </button>
            <button
              className={`btn btn__2 py-2 ${
                activeItem === "videos" ? "active_gallery_btn" : ""
              }`}
              onClick={() => setActiveItem("videos")}
            >
              Videos
            </button>
          </div>
        </div>
        <div className="section__gap pt-4">
          {activeItem === "images" ? (
            <AlbumSingle sliceValue={8} />
          ) : (
            <VideoSingle sliceValue={8} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AlbumPage;
