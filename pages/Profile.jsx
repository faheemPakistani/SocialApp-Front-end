import React from "react";
import "./profile.css";
import Topbar from "../../components/TopBar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img alt=""
                className="profileCoverImg"
                src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/persuasive-ads-coca-cola.jpg"
              ></img>
              <img alt=""
                className="profileUserImg"
                src="/asstes/person/test.jpg"
              ></img>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Faheem Akram</h4>
                <span className="profileInfoDesc">Hello Faheem</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
